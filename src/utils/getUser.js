import { useState, useEffect } from "react";
const GetCurrentUser =() =>{
    let currentUser;
    let user;
    if (typeof window !== 'undefined') {
        currentUser = localStorage.getItem("user");
        user = JSON.parse(currentUser);
    }
    return user;
}
export default GetCurrentUser

export const getUserAvatar = () =>{
    const user = GetCurrentUser();
    return user.accountEmail;
}
export const getUserId = () =>{
    const user = GetCurrentUser();
    return user.accountId;
}