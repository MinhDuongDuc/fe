import { conversationPagingUrl } from "@/api/baseUrl"
import { fetchConversation } from "@/api/conversationApi"
import { convertToDate } from "@/utils/convertDateTime"
import GetCurrentUser, { getUserAvatar } from "@/utils/getUser"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Row, Space, Typography } from "antd"
import Link from "next/link"
import { useEffect, useState } from "react"
import useSWR from "swr"
const { Text } = Typography


const ConversationList = () => {
    const currentUser = GetCurrentUser();
    const url = conversationPagingUrl(currentUser.accountId);
    const { data } = useSWR(url, fetchConversation)
    const avatar = getUserAvatar();
    // console.log(data?.result?.items);
    const conversations = data?.result?.items;
    return (
        <Space direction="vertical">
            {conversations?.map((c) => {
                return (

                    <Link href={`/c/${c.conversationId}`} key={c.conversationId} >
                        <Space align="start" style={{
                            // border: '1px solid grey',
                            padding: 10,
                            borderRadius: 20
                        }}
                        >
                            <Avatar size={50} src={<img src={avatar}/>} />
                            <Space direction="vertical" size={0}>
                                <Space style={{ justifyContent: "space-between", width: '100%' }}>
                                    <Text strong>{/*{c.conversationBody}*/} User1</Text> 
                                    <Text type="secondary">{convertToDate(c.messageSendTime)}</Text>
                                </Space>
                                <div>
                                    <Text ellipsis style={{ width: 220 }} >
                                    {c.messageBody}
                                    </Text></div>
                            </Space>
                        </Space>
                    </Link>
                );
            })}
        </Space>
    );
}
export default ConversationList