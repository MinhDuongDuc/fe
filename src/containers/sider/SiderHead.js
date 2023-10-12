import { Avatar, Button, Input, Space } from "antd"
import { EditOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const SiderHead = () => (
    <>
        <Space direction="horizontal">
            <Avatar icon={<UserOutlined/>}/>
            <Input
                prefix={<SearchOutlined/>}
                placeholder="input search text"
                allowClear
                
            />
            <Button shape="circle" icon={<EditOutlined />} />            
        </Space>
    </>
)




export default SiderHead