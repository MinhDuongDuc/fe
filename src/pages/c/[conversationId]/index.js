import Chat from "@/containers/chat/Chat";
import RootLayout from "@/layout";
import { useRouter } from "next/router";
import React, {  useState, createContext, useContext, useRef } from 'react';
import GetCurrentUser from "@/utils/getUser"


const ConversationContext = createContext();

export function useConversationContext(){
   return useContext(ConversationContext);
}
export function getServerSideProps(context){
    //console.log(context.query);
    return {
        props : {
            dataCon : context.query.con,
        }
    }
}
export default function GetMessageByConversation({dataCon}) {
    const con = JSON.parse(dataCon);
    const router = useRouter()
    const [language, setLanguage] = useState("");
    const user = GetCurrentUser();
    
    return (
        <RootLayout>
            <ConversationContext.Provider value={{ language, setLanguage,conversationId:con.conversationId,con:con }}>
                <Chat/>
            </ConversationContext.Provider>
            
        </RootLayout>
    );
}