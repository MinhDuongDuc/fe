import { Avatar, Flex, Space, Typography } from "antd"
import { InfoCircleOutlined, ShareAltOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons"
const { Text } = Typography
const ChatHeader = () => (
    <>
        <Flex justify="space-between" align="center" >
            <Space  style={{ lineHeight: 'normal' }}>
                <Avatar size={50} icon={<UserOutlined />} />
                <Space direction="vertical">
                    <Text>Duong duc minh</Text>
                    <Text>+123456789</Text>
                </Space>
            </Space>
            <Space size={"middle"}>
                <UserAddOutlined style={{ fontSize: '24px' }} />
                <ShareAltOutlined style={{ fontSize: '24px' }} />
                <InfoCircleOutlined style={{ fontSize: '24px' }} />
            </Space>
        </Flex>

    </>
)
export default ChatHeader