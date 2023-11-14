export const convertToDate =(dateTime)=>{
    var date = new Date(Date.parse(dateTime));
    return (date.getUTCDate()) + "/" + (date.getMonth() + 1);
}
export const convertToTime =(dateTime)=>{
    var date = new Date(Date.parse(dateTime));
    return date.getHours() + ":" + date.getMinutes();
}