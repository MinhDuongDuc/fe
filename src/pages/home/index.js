import ChatBody from "@/containers/chat/ChatBody";
import ChatFooter from "@/containers/chat/ChatFooter";
import ChatHeader from "@/containers/chat/ChatHeader";
import Favorites from "@/containers/sider/Favorites";
import Message from "@/containers/sider/Message";
import SiderHead from "@/containers/sider/SiderHead";
import { EditOutlined } from "@ant-design/icons";
import { Button, Layout, Input } from "antd"


const { Sider ,Header , Content , Footer} = Layout
const { Search } = Input;

const HomePage = () => (
    <>
        <Layout >
            <Sider
                width={300}
                style={{
                    // overflow: 'auto',
                    height: '100vh',
                    borderRight:'1px solid #d6dbe1'
                }}
                theme="light"
            >
                <SiderHead />
                <Favorites/>
                <Message/>
            </Sider>
            <Layout>
                <Header style={{ background: "white" ,padding:'0 20px'}}
                >
                    <ChatHeader/>
                </Header>
                <Content>
                    <ChatBody/>
                </Content>
                <Footer style={{ background: "white" }}>
                    <ChatFooter/>
                </Footer>
            </Layout>
        </Layout>
    </>
)
export default HomePage
