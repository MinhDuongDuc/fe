export const fetchAccount = accountPagingUrl => fetch(accountPagingUrl,{
    method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
}).then(r => r.json());