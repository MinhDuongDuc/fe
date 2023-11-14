import { Button, Layout, Input, Space, Flex } from "antd"
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
const { Header, Content, Footer } = Layout
const Chat = () => {
    return (
        <Flex vertical style={{height:'100vh'}}>
            <Header style={{ background: "white", padding: '0 20px' ,borderBottom:'1px solid #d6dbe1'}}>
                <ChatHeader />
            </Header>
            <Content>
                <ChatBody />
            </Content>
            <Footer style={{ background: "white", padding: '10px 20px',borderTop:'1px solid #d6dbe1' }}>
                <ChatFooter />
            </Footer>
        </Flex>
    );
}
export default Chat