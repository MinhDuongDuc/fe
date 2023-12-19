import Chat from "@/containers/chat/Chat";
import RootLayout from "@/layout";
import { useRouter } from "next/router";
import React, {  useState, createContext, useContext, useRef } from 'react';
import useSWR from "swr";
import GetCurrentUser from "@/utils/getUser"
import { fetchMessage } from "@/api/messageApi"
import { messagePagingUrl } from "../../../api/baseUrl";

const ConversationContext = createContext();

export function useConversationContext(){
   return useContext(ConversationContext);
}
export default function GetMessageByConversation() {
    const router = useRouter()
    const [language, setLanguage] = useState("");
    const user = GetCurrentUser();
    const url = messagePagingUrl(user.accountId, router.query.conversationId,language);
    // console.log(url,"get");    
    const { data,mutate } = useSWR(url, fetchMessage,{revalidateOnMount:true})
    const messages=  data?.result?.items;
    return (
        <RootLayout>
            <ConversationContext.Provider value={{messages, language, setLanguage,conversationId:router.query.conversationId }}>
                <Chat/>
            </ConversationContext.Provider>
            
        </RootLayout>
    );
}