import { mutate } from "swr";
import { messagePagingUrl } from "../api/baseUrl";
import { useLanguageContext } from "../containers/chat/Chat";
import { useConversationContext } from "../pages/c/[conversationId]";

export default function TranslateLanguageOptions() {
    const languages = [
        {
            name: 'None',
            code: ""
        },
        {
            name: 'Vietnamese',
            code: "vi"
        },
        {
            name: 'English',
            code: "en"
        },{
            name: 'Chinese',
            code: "zh"
        },
        
    ]
    const messageOptionsStyle = {
        display: 'flex', flexDirection: 'row', padding: 5, alignItems: "center",
    }
    const {language,setLanguage} = useConversationContext()
    return (
        <div>
            {languages.map((lan) => {
                return (
                    <a onClick={() => {setLanguage(lan.code) }} style={messageOptionsStyle} key={lan.code}>
                        <span style={(language === lan.code)? { marginRight: 5}: {marginRight: 5,color:"white"}} class="material-icons">done</span>
                        <span>{lan.name}</span>
                    </a>
                );
            })}
            
        </div>
    );
}