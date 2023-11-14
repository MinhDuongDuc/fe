import { convertToTime } from "@/utils/convertDateTime"
import { LeftCircleTwoTone, RightOutlined, TranslationOutlined, UserOutlined } from "@ant-design/icons"
import { Flex, Typography, Avatar, Button, Popover } from "antd"
import 'material-icons/iconfont/material-icons.css';
import { useState } from "react";
import MessageOptions from "./MessageOptions";
import styles from '@/styles/message.module.css'
const { Text } = Typography

const messageStyle = (sendByCurrent, type) => {
    const styles = {
        // justify: "flex-start",
        messageStyle: {
            border: '1px solid #d6dbe1',
            // borderRadius: '0px 20px 20px 20px',
            padding: '10px',
            maxWidth: 450,
            marginBottom: 2
        },
        fontStyle:{
            fontSize:'17px'
        },
        fontSizeTime:{
            fontSize:12,
            fontWeight:500,
            color:'rgba(255,255,255,0.5)'
        } 

    }
    if (sendByCurrent) {
        styles.justify = "flex-end";
        styles.messageStyle.background = "#5850c0";
        styles.fontStyle.color = "white"
        styles.fontSizeTime.marginLeft = 'auto'
        styles.fontSizeTime.color = 'rgba(255,255,255,0.5)'
        switch (type) {
            case 'only':
                styles.messageStyle.borderRadius = '15px 15px 15px 15px'
                break;
            case 'first':
                styles.messageStyle.borderRadius = '15px 0px 15px 15px'
                break;
            case 'middle':
                styles.messageStyle.borderRadius = '15px 0px 0px 15px'
                break;
            case 'last':
                styles.messageStyle.borderRadius = '15px 15px 0px 15px'
                break;
            default:
                break;
        }
    } else {
        styles.justify = "flex-start";
        styles.fontStyle.color = "black"
        styles.fontSizeTime.marginLeft = 'unset'
        styles.fontSizeTime.color = 'black'
        switch (type) {
            case 'only':
                styles.messageStyle.borderRadius = '15px 15px 15px 15px'
                break;
            case 'first':
                styles.messageStyle.borderRadius = '0px 15px 15px 15px'
                styles.messageStyle.marginLeft = 32
                break;
            case 'middle':
                styles.messageStyle.borderRadius = '0px 15px 15px 0px'
                styles.messageStyle.marginLeft = 32
                break;
            case 'last':
                styles.messageStyle.borderRadius = '15px 15px 15px 0px'

                break;
            default:
                break;
        }
    }
    return styles;
}
const speak = (messages) => {
    const synth = typeof window !== "undefined" && window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(messages);
    synth.speak(utterance);
}

const Message = (m) => {


    const [translated, setTranslate] = useState('');
    const style = messageStyle(m.sendByCurrent, m.messagetype);
    return (
        <>
            <Flex gap="small" justify={style.justify} align="center" className={styles.message}>
                {(!m.sendByCurrent && (m.messagetype === 'last' || m.messagetype === 'only')) ? (<Avatar icon={<UserOutlined />} />) : (<div></div>)}
                {/* <Button onClick={() => speak(m.messages.content)}></Button> */}
                {m.sendByCurrent &&
                    <Popover content={<MessageOptions message={m.messages} speak={speak} translated={translated} setTranslate={setTranslate} />} placement="leftBottom" trigger={"click"}>
                        <Button className={styles.options} style={{ border: 'none' }} ><span class="material-icons">more_vert</span></Button>
                    </Popover>}
                <Flex
                    vertical
                    style={style.messageStyle}
                >
                    <Flex vertical
                        style={{ padding: '0 10px 0 10px' }}>
                        {(!m.sendByCurrent && (m.messagetype === 'last' || m.messagetype === 'only')) ? (<Text strong>{m.messages.senderName}</Text>) : (<div></div>)}
                        <Text style={style.fontStyle} >{m.messages.messageBody}</Text>
                        <Text  style={ style.fontSizeTime  }>{convertToTime(m.messages.sendTime)}</Text>
                    </Flex>

                    {translated !== '' && <Text style={{ borderTop: '1px solid #d6dbe1', padding: '5px 10px 10px 10px' }}>{translated}</Text>}
                </Flex>
                {!m.sendByCurrent &&
                    <Popover content={<MessageOptions message={m.messages} speak={speak} translated={translated} setTranslate={setTranslate} />} placement="rightBottom" trigger={"click"}>
                        <Button className={styles.options} style={{ border: 'none' }} ><span class="material-icons">more_vert</span></Button>
                    </Popover>}
            </Flex>

        </>
    );
};
export default Message