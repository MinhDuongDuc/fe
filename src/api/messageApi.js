import { mutate } from "swr";
import { baseUrl, conversationPagingUrl, messagePagingUrl, messageSendUrl, messageTranslateUrl } from "./baseUrl";
import { async } from "regenerator-runtime";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export const fetchMessage = messagePagingUrl => fetch(messagePagingUrl).then(r => r.json());
export const translateMessage = messageTranslateUrl => fetch(messageTranslateUrl).then(r => r.json());

export async function sendMessage(messageBody, senderId, conversationId) {
    console.log(messageBody, senderId, conversationId);
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
                'Content-Type': 'application/json'
            }
        }).then(r => r.json());
    }
    catch (e) {
        console.log('Sending message failed.', e);
    }
}

export async function createConnection(senderId,conversationId) {
    const pagingUrl = messagePagingUrl(senderId,conversationId);
    const url = conversationPagingUrl(senderId);
    const conn = new HubConnectionBuilder()
        .withUrl(baseUrl + 'messageHub')
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
    conn.start({ waitForPageLoad: false}).then(result => {
        console.log('connected');
        conn.on('SendMessage',Url => {
            mutate(pagingUrl);
            mutate(url);
            console.log("sent");
        })
    }).catch(e => console.log('Connect failed: ', e));
}