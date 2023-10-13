import { UserOutlined } from "@ant-design/icons"
import { Avatar, Row, Space, Typography } from "antd"
const {Text} = Typography
const ConversationList = () => (
    <>
        <Space align="start">
            <Avatar size={50} icon={<UserOutlined />} />
            <Space direction="vertical" style={{ alignContent: "space-between" }}>
                <Space direction="horizontal" style={{ justifyContent: "space-between",width:'100%' }}>
                    <Text>Duong duc minh</Text>
                    <Text type="secondary">Monday</Text>
                </Space>
                <Text ellipsis style={{width:220}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. 
                    Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat
                </Text>

            </Space>
        </Space>
    </>
)
export default ConversationList