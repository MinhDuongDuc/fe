import Message from "@/components/Message"
import GetCurrentUser from "@/utils/getUser"
import { useConversationContext } from "@/pages/c/[conversationId]"
import styles from '@/styles/messageContainer.module.css'

const ChatBody = () => {
    const {messages,language} = useConversationContext();
    const user = GetCurrentUser();
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
                return (<Message key={m.id} messages={m} messagetype={messagetype} sendByCurrent={messages[i].senderId === user.accountId} />);
            })}
        </div>
    );
}
export default ChatBody