import { AudioFilled, CloseCircleOutlined, CloseOutlined, GifOutlined, PauseCircleOutlined, PauseOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons"
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Button, Flex, Input, Space } from "antd"
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const ChatFooter = () => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    const toogleListening = (listen) => {
        return !listen ? SpeechRecognition.startListening : SpeechRecognition.stopListening;
    }
    const [m, setMessage] = useState('');
    const [senderId, setSender] = useState('');
    const [receiverId, setReceiver] = useState('');
    useEffect(() => {
        const conn = new HubConnectionBuilder()
        .withUrl('https://localhost:5001/messageHub')
        .withAutomaticReconnect()
        .build();
        conn.start().then(result => {
            console.log('connected');
        }).catch(e => console.log('Connect failed: ',e));
    },[]);
    const sendMessage = () => {
        // console.log(message,senderId,receiverId);
        try {
            fetch('https://localhost:5001/api/Message/Send', { 
                method: 'POST', 
                body: JSON.stringify({
                    "messageBody": m,
                    "senderId": senderId,
                    "receiverId": receiverId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }
    return (
    <>
        <Flex style={{width:'100%'}} gap="small">
            <PlusOutlined />
            <GifOutlined />
            <Input onChange={(e) => {setMessage(e.target.value)}} bordered={false} placeholder="Nhập tin nhắn"/>
            <Input onChange={(e) => {setSender(e.target.value)}} bordered={false} placeholder="Sender"/>
            <Input onChange={(e) => {setReceiver(e.target.value)}} bordered={false} placeholder="Receiver"/>
            {/* <p style={{width:'100%'}}> {transcript}</p> */}
            <Button onClick={() => sendMessage()} shape="circle" icon = {<SendOutlined />}></Button>
            <Button onClick={SpeechRecognition.startListening} shape="circle" icon = {<AudioFilled />}></Button>
            <Button onClick={SpeechRecognition.stopListening} shape="circle" icon = {<PauseOutlined />}></Button>
            <Button onClick={SpeechRecognition.abortListening} shape="circle" icon = {<CloseOutlined />}></Button>
        </Flex>
    </>
    );
};
export default ChatFooter