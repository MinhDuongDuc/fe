import MessageReceived from "@/components/MessageReceived"
import MessageSent from "@/components/MessageSent"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Input,Typography, Flex, Space } from "antd"
const {Text} = Typography
const ChatBody = ()  => (
    <>
        <div className="container" 
            style={{
                padding:'20px 300px',
                display:'flex',
                flexDirection:'column',
                alignContent:'end'
            }}>
            <MessageSent/>
            <MessageReceived/>
            <MessageSent/>
        </div>
    </>
)
export default ChatBody