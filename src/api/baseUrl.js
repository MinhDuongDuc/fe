export const baseUrl = "https://localhost:44302/";

export const conversationPagingUrl = (currentAccountId) => {
    return baseUrl+"api/Conversation/Paging?PerPage=20&CurrentPage=1&AccountId="+currentAccountId;
}

export const messageSendUrl = baseUrl + "api/Message/Send";

export const messagePagingUrl = (currentAccountId,conversationId) => {
    return baseUrl+"api/Message/Paging?PageSize=30&PageNumber=1&ConversationId="+conversationId+"&AccountId="+currentAccountId;
}

export const accountPagingUrl = (currentAccountId) => {
    return baseUrl + "api/Account/Paging?PerPage=50&CurrentPage=1&CurrentAccountid=" + currentAccountId;
}

export const messageTranslateUrl = (messageId) => {
    return baseUrl+"api/Message/Translate?MessageId="+messageId
}