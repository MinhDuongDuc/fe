import { UserOutlined } from "@ant-design/icons"
import { Avatar, Flex,Typography } from "antd"
const {Text} = Typography
const itemStyle = {
    height:'50px',borderTop:'1px solid #d6dbe1',padding:'0 10px'
}
const ConversationInfo = () =>(
    <>
        <Flex vertical  >
            <Flex vertical justify="center" align="center" gap = 'small' style={{height:'100px',padding:'10px 0'}}>
                <Avatar size={50} icon={<UserOutlined />} />
                <Text strong>User name</Text>
            </Flex>

            <a >
                <Flex justify="space-between" align="center" 
                    style={itemStyle}>
                    <Text strong>Thư viện ảnh</Text>
                    <Text >10</Text>
                </Flex>
            </a>
            <a >
                <Flex justify="space-between" align="center" 
                    style={itemStyle}>
                    <Text strong>Gif</Text>
                    <Text >10</Text>
                </Flex>
            </a>
            <a >
                <Flex justify="space-between" align="center" 
                    style={itemStyle}>
                    <Text strong>Liên kết</Text>
                    <Text >10</Text>
                </Flex>
            </a>
            <a >
                <Flex justify="space-between" align="center" 
                    style={itemStyle}>
                    <Text strong>Tập tin</Text>
                    <Text >10</Text>
                </Flex>
            </a>
        </Flex>
    </>
)
export default ConversationInfo