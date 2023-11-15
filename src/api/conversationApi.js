import { conversationPagingUrl } from "./baseUrl";


export const fetchConversation = conversationPagingUrl => fetch(conversationPagingUrl,{
    method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
}).then(r => r.json());
    