import { mutate } from "swr";
import { baseUrl, conversationPagingUrl, messagePagingUrl, messageSendUrl, messageTranslateUrl } from "./baseUrl";
import { async } from "regenerator-runtime";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export const fetchMessage = messagePagingUrl => fetch(messagePagingUrl,{
    method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
}).then(r => r.json());
export const translateMessage = messageTranslateUrl => fetch(messageTranslateUrl,{
    method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
}).then(r => r.json());

export async function sendMessage(messageBody, senderId, conversationId) {
    // console.log(messageBody, senderId, conversationId);
    try {
        await fetch(messageSendUrl, {
            method: 'POST',
            body: JSON.stringify({
                messageBody,
                senderId,
                conversationId,
                "receiverIds": []
            }),
            headers: {
                'Content-Type': 'application/json',"ngrok-skip-browser-warning": "69420",
            }
        }).then(r => r.json());
    }
    catch (e) {
        console.log('Sending message failed.', e);
    }
}

export  function createConnection(senderId,conversationId,language) {
    const pagingUrl = messagePagingUrl(senderId,conversationId,language);
    const url = conversationPagingUrl(senderId);
    const conn = new HubConnectionBuilder()
        .withUrl(baseUrl + 'messageHub')
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
    conn.start({ waitForPageLoad: false}).then(result => {
        console.log('connected');
        conn.on('SendMessage',(mess) => {
            mutate(pagingUrl);
            mutate(url);
            console.log(pagingUrl,"sent");
        })
    }).catch(e => console.log('Connect failed: ', e));
}
