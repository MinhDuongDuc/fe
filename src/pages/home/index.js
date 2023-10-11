import Favorites from "@/containers/sider/Favorites";
import Message from "@/containers/sider/Message";
import SiderHead from "@/containers/sider/SiderHead";
import { EditOutlined } from "@ant-design/icons";
import { Button, Layout, Input } from "antd"

const { Sider } = Layout
const { Search } = Input;

const HomePage = () => (
    <>
        <Layout hasSider>
            <Sider
                width={250}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                theme="light"
            >
                <SiderHead />
                <Favorites/>
                <Message/>
            </Sider>

        </Layout>


    </>
)
export default HomePage
