import { useEffect, useState } from "react";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Api = () => {
  const [messages, updateMessage] = useState([]);
  useEffect(() => {
    fetch('https://localhost:5001/api/Message/Paging',{
      method:'POST',
      body:JSON.stringify({
        "perPage": 10,
        "currentPage": 1,
        "senderId": "9a945d15-cacc-4843-a872-7174b2e3bb09",
        "receiverId": "1989ea0b-c0e8-47f7-b33c-3d7b9926dd90"
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      const dataItem = data.result.items;
      
      updateMessage(dataItem)
      console.log(data.result.items);
    })
  },[messages]);
  return (
    <>
      {/* {messages.map((m) => {
        return(<p>{m.messageBody}</p>);
      })} */}
      {/* <p>{messages.}</p> */}
    </>
  );
};
export default Api