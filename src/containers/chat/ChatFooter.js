import { AudioFilled, GifOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"

const ChatFooter = () => (
    <>
        <Space>
            <PlusOutlined />
            <GifOutlined />
            <Input bordered={false} placeholder="Nhập tin nhắn" />
            <Button shape="circle" icon = {<AudioFilled />}></Button>
        </Space>
    </>
)
export default ChatFooter