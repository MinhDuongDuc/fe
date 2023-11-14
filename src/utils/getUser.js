import { useState, useEffect } from "react";
const GetCurrentUser =() =>{
    let currentUser;
    if (typeof window !== 'undefined') {
        currentUser = localStorage.getItem("userId");
    }
    return currentUser;
}
export default GetCurrentUser