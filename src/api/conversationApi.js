import { conversationPagingUrl } from "./baseUrl";


export const fetchConversation = conversationPagingUrl => fetch(conversationPagingUrl).then(r => r.json());
    