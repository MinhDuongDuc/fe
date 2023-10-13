import { AudioFilled, GifOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Input, Space } from "antd"

const ChatFooter = () => (
    <>
        <Flex style={{width:'100%'}} gap="small">
            <PlusOutlined />
            <GifOutlined />
            <Input bordered={false} placeholder="Nhập tin nhắn" style={{width:'100%'}}/>
            <Button shape="circle" icon = {<AudioFilled />}></Button>
        </Flex>
    </>
)
export default ChatFooter