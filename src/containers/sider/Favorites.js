import { DashOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Space } from "antd"

const Favorites = () =>(
    <>
        <Space direction="horizontal"
            style={{
                width:'100%',
                justifyContent:"space-between"}}
            >
            Trò chuyện
            <Button icon={<DashOutlined />}/>
        </Space> 
            
        <Space direction="horizontal">
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            
        </Space>
    </>
)
export default Favorites