export const fetchAccount = accountPagingUrl => fetch(accountPagingUrl).then(r => r.json());