import ChatBody from "@/containers/chat/ChatBody";
import ChatFooter from "@/containers/chat/ChatFooter";
import ChatHeader from "@/containers/chat/ChatHeader";
import Favorites from "@/containers/sider/Favorites";
import Message from "@/containers/sider/ConversationList";
import SiderHead from "@/containers/sider/SiderHead";
import { EditOutlined } from "@ant-design/icons";
import { Button, Layout, Input } from "antd"
import ConversationList from "@/containers/sider/ConversationList";


const { Sider ,Header , Content , Footer} = Layout
const { Search } = Input;

const HomePage = () => (
    <>
        <Layout >
            <Sider
                width={300}
                style={{
                    // overflow: 'auto',
                    padding:10,
                    height: '100vh',
                    borderRight:'1px solid #d6dbe1'
                }}
                theme="light"
            >
                <SiderHead />
                <Favorites/>
                <ConversationList/>
            </Sider>
            <Layout>
                <Header style={{ background: "white" ,padding:'0 20px'}}
                >
                    <ChatHeader/>
                </Header>
                <Content>
                    <ChatBody/>
                </Content>
                <Footer style={{ background: "white" , padding:'10px 20px'}}>
                    <ChatFooter/>
                </Footer>
            </Layout>
        </Layout>
    </>
)
export default HomePage
