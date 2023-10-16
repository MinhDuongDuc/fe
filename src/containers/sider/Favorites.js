import { DashOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Space,Typography } from "antd"
const {Text} = Typography
const Favorites = () =>(
    <>
    <Space direction="vertical" style={{width:'100%'}}>
        <Space 
            style={{
                width:'100%',
                justifyContent:"space-between"}}
            >
            <Text>Tro chuyen</Text>
            <Button icon={<DashOutlined />}/>
        </Space> 
            
        <Space style={{
                width:'100%',
                justifyContent:"space-between"}}
            >
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
            <Avatar icon={<UserOutlined/>}/>
        </Space>
    </Space>    
    </>
)
export default Favorites