import { LeftCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const AccountSearch =(props)=>{
    return(
        <>
            <Space direction="horizontal" style={{padding:'0 10px'}}>
            <Button onClick={() => props.toogle.func(props.toogle.param)} icon ={<LeftCircleOutlined />}/>            
            <Input
                prefix={<SearchOutlined/>}
                placeholder="input search text"
                allowClear
                
            />
            {/* <Button onClick={() => props.toogle.func(props.toogle.param)} shape="circle" icon={<EditOutlined />} />             */}
        </Space>
        </>
    );

}
export default AccountSearch