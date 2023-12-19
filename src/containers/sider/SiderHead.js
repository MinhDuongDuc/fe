import { Avatar, Button, Input, Space } from "antd"
import { EditOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const SiderHead = (props) => (
    <>
        <Space direction="horizontal" style={{padding:'0 10px'}}>
            <Avatar src={<img src={"https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription01&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Close&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned"}/>}/>
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