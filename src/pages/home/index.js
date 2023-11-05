import ChatBody from "@/containers/chat/ChatBody";
import ChatFooter from "@/containers/chat/ChatFooter";
import ChatHeader from "@/containers/chat/ChatHeader";
import Favorites from "@/containers/sider/Favorites";
import Message from "@/containers/sider/ConversationList";
import SiderHead from "@/containers/sider/SiderHead";
import { EditOutlined } from "@ant-design/icons";
import { Button, Layout, Input, Space } from "antd"
import ConversationList from "@/containers/sider/ConversationList";
import ConversationInfo from "@/containers/sider/ConversationInfo";
import React, { useEffect, useState } from 'react';

const { Sider, Header, Content, Footer } = Layout
const { Search } = Input;

const HomePage = () => {
    

    const [collapsed, setCollapsed] = useState(true);
    const handleCollapsed = (c) => {
        setCollapsed(!c)
    };
    return (
        <>
            <Layout >
                <Sider
                    width={320}
                    style={{
                        // overflow: 'auto',
                        padding: 10,
                        height: '100vh',
                        borderRight: '1px solid #d6dbe1'
                    }}
                    theme="light"
                >
                    <Space direction="vertical">
                        <SiderHead />
                        <Favorites />
                        <ConversationList />
                    </Space>
                </Sider>
                <Layout>
                    <Header style={{ background: "white", padding: '0 20px' }}>
                        <ChatHeader func={handleCollapsed} col={collapsed} />
                    </Header>
                    <Content>
                        <ChatBody />
                    </Content>
                    <Footer style={{ background: "white", padding: '10px 20px' }}>
                        <ChatFooter />
                    </Footer>
                </Layout>
                <Sider
                    width={300}
                    style={{
                        // overflow: 'auto',
                        // padding:10,
                        height: '100vh',
                        borderLeft: '1px solid #d6dbe1'
                    }}
                    theme="light"
                    collapsed={collapsed}
                    collapsedWidth={0}
                >
                    <ConversationInfo />
                </Sider>
            </Layout>
        </>);
}
export default HomePage
