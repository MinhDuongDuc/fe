import MessageReceived from "@/components/MessageReceived"
import MessageSent from "@/components/MessageSent"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Input, Typography, Flex, Space } from "antd"
const { Text } = Typography

const messages = [
    {
        type: 'receive',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
    }
]

const ChatBody = () => (
    <>
        <div className="container"
            style={{
                padding: '20px 300px',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'end'
            }}>
            {messages.map((m) => {
                return (<MessageSent messages = {m}/>);
            })}
            {/* <MessageSent messages={messages}/>
            <MessageReceived />
            <MessageSent /> */}
        </div>
    </>
)
export default ChatBody