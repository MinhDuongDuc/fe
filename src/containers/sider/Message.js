import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space, Typography } from "antd"
const {Text} = Typography
const Message = () => (
    <>
        <Space align="start">
            <Avatar size={60} icon={<UserOutlined />} />
            <Space direction="vertical" size={0}>
                <Space direction="horizontal" style={{ justifyContent: "space-between" }}>
                    <Text>Duong duc minh</Text>
                    <Text type="secondary">Monday</Text>
                </Space>
                <Text ellipsis = {{rows:2}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. 
                    Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat</Text>

            </Space>
        </Space>
    </>
)
export default Message