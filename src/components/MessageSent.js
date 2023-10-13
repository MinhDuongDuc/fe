import { Flex,Typography } from "antd"
const {Text} = Typography
const MessageSent = (message) => (
    <>
        <Flex justify="flex-end">
            <Flex 
                vertical
                style={{
                    border:'1px solid #d6dbe1',
                    borderRadius:'20px 0  20px 20px',
                    padding:10,
                    maxWidth:450
                }}
                gap="small"
            >
                <Text autoSize = {true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus odio urna, a tristique nulla faucibus ut. Etiam consectetur erat sit amet dolor gravida, in fringilla tortor consequat</Text>
            </Flex>
        </Flex>
    </>
)
export default MessageSent