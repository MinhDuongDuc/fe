import { Avatar, Space } from "antd"
import { UserOutlined } from "@ant-design/icons"
const ChatHeader = () => (
    <>
        <Space>
            <Avatar size={50} icon={<UserOutlined />} />
        </Space>
    </>
)
export default ChatHeader