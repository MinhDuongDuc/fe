import { Avatar, Input, Typography, Flex, Space, List, Row, Col } from "antd"
import Message from "@/components/Message"
import { fetchMessage } from "@/api/messageApi"
import useSWR from "swr"
import { messagePagingUrl } from "@/api/baseUrl"
import GetCurrentUser from "@/utils/getUser"
import { useConversationContext } from "@/pages/c/[conversationId]"
import styles from '@/styles/messageContainer.module.css'
const { Text } = Typography

const ChatBody = () => {
    const conversationContext = useConversationContext();
    const url = messagePagingUrl(GetCurrentUser(), conversationContext);
    const { data } = useSWR(url, fetchMessage)
    const messages = data?.result?.items;
    let messagetype;
    return (
        <div className={styles.container}>

            {messages?.map((m, i) => {
                let lastindex = messages.length - 1;
                if (lastindex === 0) messagetype = 'only'
                else {
                    if (i === 0) {
                        if (messages[i].senderId === messages[i + 1].senderId) messagetype = 'first';
                        else messagetype = 'only';
                    } else if (i === lastindex) {
                        if (messages[i].senderId === messages[i - 1].senderId) messagetype = 'last';
                        else messagetype = 'only'
                    } else {
                        if (messages[i].senderId === messages[i + 1].senderId && messages[i].senderId === messages[i - 1].senderId) messagetype = 'middle';
                        else if (messages[i].senderId !== messages[i + 1].senderId && messages[i].senderId === messages[i - 1].senderId) messagetype = 'last';
                        else if (messages[i].senderId === messages[i + 1].senderId && messages[i].senderId !== messages[i - 1].senderId) messagetype = 'first';
                        else if (messages[i].senderId !== messages[i + 1].senderId && messages[i].senderId !== messages[i - 1].senderId) messagetype = 'only';
                    }
                }
                return (<Message key={m.id} messages={m} messagetype={messagetype} sendByCurrent={messages[i].senderId === GetCurrentUser()} />);
            })}
        </div>
    );
}
export default ChatBody