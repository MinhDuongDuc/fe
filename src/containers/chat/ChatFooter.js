import { baseUrl, messageSendUrl } from "@/api/baseUrl";
import { createConnection, sendMessage } from "@/api/messageApi";
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
    const conversationId = "609768ad-61b3-4b56-9257-435fd0796d71";
    const senderId = GetCurrentUser();
    useEffect(() => {
        createConnection(senderId, conversationId);
    }, []);


    const handleSendMessage = () => {
        sendMessage(messageBody, senderId, conversationId);
    }
    return (
        <>
            <Flex style={{ width: '100%' }} gap="small">
                <Input value={transcript} onChange={(e) => { setMessage(e.target.value) }} bordered={false} placeholder="Nhập tin nhắn" />
                <Button onClick={() => sendMessage(messageBody, senderId, conversationId)} shape="circle" icon={<SendOutlined />}></Button>
                <Button onClick={SpeechRecognition.startListening} shape="circle" icon={<AudioFilled />}></Button>
                <Button onClick={SpeechRecognition.stopListening} shape="circle" icon={<PauseOutlined />}></Button>
            </Flex>
        </>
    );
};
export default ChatFooter