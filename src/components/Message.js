import { UserOutlined } from "@ant-design/icons"
import { Flex,Typography,Avatar } from "antd"
const {Text} = Typography
const messageSent = {
    justify:"flex-end",
    messageStyle :{
        border:'1px solid #d6dbe1',
        borderRadius:'20px 0  20px 20px',
        padding:10,
        maxWidth:450,
        marginBottom:10
    }
}
const messageReceived = {
    justify:"flex-start",
    messageStyle :{
        border:'1px solid #d6dbe1',
        borderRadius:'0px 20px 20px 20px',
        padding:10,
        maxWidth:450,
        marginBottom:10
    }
}
const Message = (m) => (
    <>

        <Flex gap="small" justify={m.messages.type === 'send' ? messageSent.justify : messageReceived.justify}>
            {m.messages.type === 'receive' ? (<Avatar icon={<UserOutlined/>}/>): (<div></div>)}
            <Flex 
                vertical
                style={m.messages.type === 'send' ? messageSent.messageStyle : messageReceived.messageStyle}
            >
                {m.messages.type === 'receive' ? (<Text strong>Name</Text>) : (<div></div>)}
                <Text >{m.messages.content}</Text>
                <Text type="secondary" style={{marginLeft:'auto'}}>{m.messages.timing}</Text>
            </Flex>
        </Flex>
    </>
)
export default Message