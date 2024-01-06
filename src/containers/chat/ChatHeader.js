import { Avatar, Button , Flex, Space, Typography } from "antd"
import { InfoCircleOutlined, ShareAltOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons"
import { createContext } from "react";
import { useChatHeaderContext } from "@/pages/home";
import GetCurrentUser, { getUserAvatar, getUserId } from "@/utils/getUser";
import { useConversationContext } from "@/pages/c/[conversationId]";
const { Text } = Typography

const ChatHeader = () => {
    const funcCollapsed = useChatHeaderContext();
    const {con} = useConversationContext();
    const currentUser = getUserId();
    const user = {
        ava : '',
        displayName : ''
    }
    return(
        
        <Flex justify="space-between" align="center" >
            {con.participants?.map((p) => {
                if(p.id !== currentUser){
                    user.ava = p.email;
                    user.displayName = p.username;
                }
            })}
            <Space  style={{ lineHeight: 'normal' }}>
                <Avatar size={50} src={<img src={user.ava}/>} />
                <Space direction="vertical">
                    <Text>{user.displayName}</Text>
                    {/* <Text>+123456789</Text> */}
                </Space>
            </Space>
            <Space size={"middle"}>
                <Button style={{borderStyle:'none'}} icon= {<UserAddOutlined style={{ fontSize: '24px' }} />}/>
                <Button style={{borderStyle:'none'}} icon= {<ShareAltOutlined style={{ fontSize: '24px' }} />}/>
                <Button 
                    onClick={() => funcCollapsed.handleCollapsed(funcCollapsed.collapsed)}
                    style={{borderStyle:'none'}} 
                    icon= {<InfoCircleOutlined style={{ fontSize: '24px' }} />}
                />
            </Space>
        </Flex>

    );
}
export default ChatHeader