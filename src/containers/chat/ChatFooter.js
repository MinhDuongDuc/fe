import { baseUrl, messageSendUrl } from "@/api/baseUrl";
import { createConnection, sendMessage } from "@/api/messageApi";
import { useConversationContext } from "@/pages/c/[conversationId]";
import GetCurrentUser from "@/utils/getUser";
import { AudioFilled, CloseCircleOutlined, CloseOutlined, GifOutlined, PauseCircleOutlined, PauseOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons"

import { Button, Flex, Input, Popover, Space } from "antd"
import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useSWR from "swr";
import TranslateLanguageOptions from "../../components/TranslateLanguageOptions";
const ChatFooter = () => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    const [messageBody, setMessage] = useState('');
    const {conversationId,language} = useConversationContext();
    const user = GetCurrentUser();
    const senderId = user.accountId;
    useEffect(() => {console.log(conversationId,"footer");
        createConnection(senderId, conversationId,language);
    }, [conversationId]);
    useEffect(() => {
        setMessage(transcript);
      }, [transcript]);
    return (
        <>
            <Flex style={{ width: '100%' }} gap="small">
                {listening&&<Input value={transcript} onChange={(e) => { setMessage(e.target.value) }} bordered={false} placeholder="Nhập tin nhắn" />}
                {!listening&&
                <Input 
                    onChange={(e) => { setMessage(e.target.value) }} 
                    onPressEnter={(e)=> {
                        e.target.value='';
                        sendMessage(messageBody, senderId, conversationId)
                    }} 
                    bordered={false} 
                    placeholder="Nhập tin" />}
                <Popover content={<TranslateLanguageOptions user={senderId} con = {conversationId}/>} placement="topLeft" trigger={"click"}>
                    <Button icon={<span class="material-icons">g_translate</span>} style={{border:"none"}}></Button>
                </Popover>
                <Button onClick={() => sendMessage(messageBody, senderId, conversationId)} shape="circle" icon={<SendOutlined />}></Button>
                <Button onClick={() =>SpeechRecognition.startListening({ continuous: true })} shape="circle" icon={<AudioFilled />}></Button>
                <Button onClick={SpeechRecognition.stopListening} shape="circle" icon={<PauseOutlined />}></Button>
            </Flex>
        </>
    );
};
export default ChatFooter