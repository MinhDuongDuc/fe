import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space, Input,Typography } from "antd"
const {Text} = Typography
const ChatBody = ()  => (
    <>
        <Space align="start">
            <Avatar icon={<UserOutlined/>}/>
            <Space 
                direction="vertical" 
                style={{
                    border:'1px solid #d6dbe1',
                    borderRadius:'0 20px 20px 20px',
                    padding:10,
                    maxWidth:450
                }}
            >
                <Text>Name</Text>
                <Text autoSize = {true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat</Text>
            </Space>
        </Space>
        
    </>
)
export default ChatBody