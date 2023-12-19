import { Button, Layout, Input, Space, Flex } from "antd"
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useEffect, useState,createContext,useContext } from "react";
const { Header, Content, Footer } = Layout

const LanguageContext = createContext();

export function useLanguageContext() {
    return useContext(LanguageContext);
}
const Chat = () => {
    

    return (
        
            <Flex vertical style={{ height: '100vh' }}>
                <Header style={{ background: "white", padding: '0 20px', borderBottom: '1px solid #d6dbe1' }}>
                    <ChatHeader />
                </Header>
                <Content>
                    <ChatBody />
                </Content>
                <Footer style={{ background: "white", padding: '10px 20px', borderTop: '1px solid #d6dbe1' }}>
                    <ChatFooter />
                </Footer>
            </Flex>
        
    );
}
export default Chat