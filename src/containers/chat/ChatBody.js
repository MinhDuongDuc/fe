import { Avatar, Input, Typography, Flex, Space } from "antd"
import Message from "@/components/Message"
const { Text } = Typography

const messages = [
    {
        
        type: 'receive',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1',
        timing: '20/10/2023',
        isSeen: true
    },
    {
        type: 'send',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        timing: '20/10/2023',
        isSeen: true
    },
    {
        type: 'receive',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        timing: '20/10/2023',
        isSeen: true
    },
    {
        type: 'send',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat',
        timing: '20/10/2023',
        isSeen: true
    },
]

const ChatBody = () => (
    <>
        <div className="container"
            style={{
                padding: '20px 300px',
                display: 'flex',
                height:'100%',
                flexDirection: 'column-reverse',
                alignContent: 'end'
            }}>
            {messages.map((m) => {
                return (<Message key={m.id} messages={m}/>);
            })}
        </div>
    </>
)
export default ChatBody