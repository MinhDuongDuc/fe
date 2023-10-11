import ChatHeader from "@/containers/chat/ChatHeader";
import Favorites from "@/containers/sider/Favorites";
import Message from "@/containers/sider/Message";
import SiderHead from "@/containers/sider/SiderHead";
import { EditOutlined } from "@ant-design/icons";
import { Button, Layout, Input } from "antd"


const { Sider ,Header} = Layout
const { Search } = Input;

const HomePage = () => (
    <>
        <Layout hasSider>
            <Sider
                width={300}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    borderRight:'1px solid #d6dbe1'
                }}
                theme="light"
            >
                <SiderHead />
                <Favorites/>
                <Message/>
            </Sider>

        </Layout>
        <Layout>
            <Header style={{ background: "blue", }}
            >
                <ChatHeader/>
            </Header>
        </Layout>

    </>
)
export default HomePage
