import Chat from "@/containers/chat/Chat";
import RootLayout from "@/layout";
import { useRouter } from "next/router";
import React, {  useState, createContext, useContext } from 'react';

const ConversationContext = createContext();

export function useConversationContext(){
   return useContext(ConversationContext);
}
export default function GetMessageByConversation() {
    const router = useRouter()
    return (
        <RootLayout>
            <ConversationContext.Provider value={router.query.conversationId}>
                <Chat/>
            </ConversationContext.Provider>
            
        </RootLayout>
    );
}