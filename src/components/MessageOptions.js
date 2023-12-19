import { messageTranslateUrl } from "@/api/baseUrl";
import { translateMessage } from "@/api/messageApi";
import useSWR from "swr";

export default function MessageOptions({message, speak,translated,setTranslate}){
    const messageOptionsStyle = {
        display:'flex', flexDirection:'row',padding:10,alignItems:"center",
    }
    const url = messageTranslateUrl(message.id);
    const { data } = useSWR(url,translateMessage);
    return (
        <div>
            {/* <a  onClick={()=>setTranslate(data?.result)} style={messageOptionsStyle}>
                <span style={{marginRight:10}} class="material-icons">g_translate</span>
                <span>Dịch</span>
            </a> */}
            <a  onClick={()=>speak(message.messageBody)} style={messageOptionsStyle}>
                <span style={{marginRight:10}} class="material-icons">volume_up</span>
                <span>Chuyển văn bản thành giọng nói</span>
            </a>
            <p style={messageOptionsStyle}>
                <span style={{marginRight:10}} class="material-icons">delete</span>
                <span>Xóa</span>
            </p>
        </div>
    );
}