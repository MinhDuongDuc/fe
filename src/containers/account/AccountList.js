import { fetchAccount } from "@/api/accountApi";
import { accountPagingUrl } from "@/api/baseUrl";
import { UserOutlined } from "@ant-design/icons";
import GetCurrentUser from "@/utils/getUser"
import { Avatar, Checkbox, Flex, Space,Typography } from "antd";
import useSWRImmutable from "swr";
const { Text } = Typography
const AccountList = () => {
    const user = GetCurrentUser();
    const currentUser = user.accountId;
    const url = accountPagingUrl(currentUser);
    const {data} = useSWRImmutable(url, fetchAccount);
    const accounts = data?.result?.items;
    return (
        <Space direction="vertical">
            {accounts?.map((a) => {
                return (
                    <Space align="center" style={{
                        padding: 10,
                        borderRadius: 20}} 
                        key={a.id} >
                            <Avatar size={40} src={<img src={a.email}/>} />
                            <Text strong>{a.userName}</Text>
                            {/* <Checkbox></Checkbox> */}
                    </Space>

                );
            })}
        </Space>
    );
}
export default AccountList