import { Avatar, Button , Flex, Space, Typography } from "antd"
import { InfoCircleOutlined, ShareAltOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons"
const { Text } = Typography

const ChatHeader = (props) => (
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
                <Button style={{borderStyle:'none'}} icon= {<UserAddOutlined style={{ fontSize: '24px' }} />}/>
                <Button style={{borderStyle:'none'}} icon= {<ShareAltOutlined style={{ fontSize: '24px' }} />}/>
                <Button 
                    onClick={() => props.func(props.col)}
                    style={{borderStyle:'none'}} 
                    icon= {<InfoCircleOutlined style={{ fontSize: '24px' }} />}
                />
            </Space>
        </Flex>

    </>
)
export default ChatHeader