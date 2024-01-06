import { messagePagingUrl } from "@/api/baseUrl";
import { createConnection, fetchMessage, sendMessage } from "@/api/messageApi";
import GetCurrentUser from "@/utils/getUser";
import { useEffect } from "react";
import useSWR from "swr";

const messagelist = () => {
    const conversationId = '609768ad-61b3-4b56-9257-435fd0796d71';
    const user = GetCurrentUser();
    const url = messagePagingUrl(user.accountId, conversationId , '');

    useEffect(() => {console.log(conversationId,"footer");
        createConnection(user.accountId, conversationId,'');
    }, [conversationId]);
    
    // console.log(url,"get");    
    const { data } = useSWR(url, fetchMessage, { revalidateOnMount: true,revalidateOnFocus:false })
    const messages = data?.result?.items;
    return (
        <div style={{ width: '600px', height: '600px', border: '1px solid white' }}>
            
            <input id= "mesBody" type="text" style={{ width: '200px' }}></input>
            <button type='button' onClick={()=>{sendMessage(document.getElementById('mesBody').value, user.accountId, conversationId)}}>send</button>

            <div>
                {messages?.map((m, i) => {
                    return (
                        <div key={m.id} style={{ display: "flex", flexDirection: "row" }}>
                            <p >{m.senderName}</p>
                            <p>  :  </p>
                            <p >{m.messageBody}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default messagelist