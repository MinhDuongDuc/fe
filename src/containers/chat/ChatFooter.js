import { baseUrl, messageSendUrl } from "@/api/baseUrl";
import { createConnection, sendMessage } from "@/api/messageApi";
import { useConversationContext } from "@/pages/c/[conversationId]";
import GetCurrentUser from "@/utils/getUser";
import { AudioFilled, CloseCircleOutlined, CloseOutlined, GifOutlined, PauseCircleOutlined, PauseOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons"

import { Button, Flex, Input, Space } from "antd"
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useSWR from "swr";
const ChatFooter = () => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const toogleListening = (listen) => {
        return !listen ? SpeechRecognition.startListening : SpeechRecognition.stopListening;
    }
    const [messageBody, setMessage] = useState('');
    // const [senderId, setSender] = useState('');
    const [receiverId, setReceiver] = useState('');
    const conversationId = useConversationContext();
    console.log(conversationId);
    const senderId = GetCurrentUser();
    useEffect(() => {
        createConnection(senderId, conversationId);
    }, []);
    useEffect(() => {
        setMessage(transcript);
      }, [transcript]);

    const handleSendMessage = () => {
        sendMessage(messageBody, senderId, conversationId);
    }
    console.log(listening);
    return (
        <>
            <Flex style={{ width: '100%' }} gap="small">
                {listening&&<Input value={transcript} onChange={(e) => { setMessage(e.target.value) }} bordered={false} placeholder="Nhập tin nhắn" />}
                {!listening&&<Input onChange={(e) => { setMessage(e.target.value) }} bordered={false} placeholder="Nhập tin" />}
                <Button onClick={() => sendMessage(messageBody, senderId, conversationId)} shape="circle" icon={<SendOutlined />}></Button>
                <Button onClick={() =>SpeechRecognition.startListening({ continuous: true })} shape="circle" icon={<AudioFilled />}></Button>
                <Button onClick={SpeechRecognition.stopListening} shape="circle" icon={<PauseOutlined />}></Button>
            </Flex>
        </>
    );
};
export default ChatFooter