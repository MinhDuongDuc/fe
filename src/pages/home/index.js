import {  Layout, Input } from "antd"
import ConversationInfo from "@/containers/sider/ConversationInfo";
import React, {  useState, createContext, useContext } from 'react';
import ConversationSideBar from "@/containers/sider/ConversationSideBar";
import AccountSideBar from "@/containers/account/AccountSideBar";

const { Sider} = Layout
const ChatHeaderContext = createContext();

export function useChatHeaderContext(){
   return useContext(ChatHeaderContext);
}
const HomePage = ({children}) => {
    const [toogleAccountList,toogle] = useState(false);
    const toogleAccountListFunc =(t) =>{
        toogle(!t)
    };

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
                    {!toogleAccountList &&<ConversationSideBar func={toogleAccountListFunc} param={toogleAccountList}/>}
                    {toogleAccountList &&<AccountSideBar func={toogleAccountListFunc} param={toogleAccountList}/>}
                </Sider>
                <Layout>
                    <ChatHeaderContext.Provider value={{collapsed,handleCollapsed}}>
                        {children}
                    </ChatHeaderContext.Provider>
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
