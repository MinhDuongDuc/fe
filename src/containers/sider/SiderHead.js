import { Avatar, Button, Input, Space } from "antd"
import { EditOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const SiderHead = (props) => (
    <>
        <Space direction="horizontal" style={{padding:'0 10px'}}>
            <Avatar icon={<UserOutlined/>}/>
            <Input
                prefix={<SearchOutlined/>}
                placeholder="input search text"
                allowClear
                
            />
            <Button onClick={() => props.toogle.func(props.toogle.param)} shape="circle" icon={<EditOutlined />} />            
        </Space>
    </>
)




export default SiderHead