import { Flex,Typography ,Avatar} from "antd"
import { UserOutlined } from "@ant-design/icons"
const {Text} = Typography
const MessageReceived = () => (
    <>
        <Flex gap="small">
            <Avatar icon={<UserOutlined/>}/>
            <Flex 
                vertical
                style={{
                    border:'1px solid #d6dbe1',
                    borderRadius:'0 20px 20px 20px',
                    padding:10,
                    maxWidth:450
                }}
                gap="small"
            >
                <Text>Name</Text>
                <Text autoSize = {true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat</Text>
            </Flex>
        </Flex>
    </>
)
export default MessageReceived