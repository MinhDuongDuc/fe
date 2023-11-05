import { UserOutlined } from "@ant-design/icons"
import { Avatar, Row, Space, Typography } from "antd"
const {Text} = Typography
const conversations = [
    {
        id:1,
        displayName:'User name',
        image:''
    },
    {
        id:2,
        displayName:'Group name',
        image:''
    }
]
const ConversationList = () => (
    <>
        <Space direction="vertical">
        {conversations.map((c) => {
            return (

                <a key={c.id} >
                <Space align="start" style={{
                        // border: '1px solid grey',
                        padding: 10,
                        borderRadius: 20}}
                    >
                    <Avatar size={50} icon={<UserOutlined />} />
                    <Space direction="vertical" size={0}>
                        <Space style={{ justifyContent: "space-between",width:'100%' }}>
                            <Text strong>{c.displayName}</Text>
                            <Text type="secondary">Monday</Text>
                        </Space>
                        <div>
                        <Text ellipsis style={{width:220}} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. 
                            Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat
                        </Text></div>
                    </Space>
                </Space>
                </a>
            );
        })}
        </Space>
    </>
)
export default ConversationList