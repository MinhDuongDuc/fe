import { Space } from "antd";
import AccountSearch from "./AccountSearch";
import AccountList from "./AccountList";

const AccountSideBar = (props) => {
    return (
        <>
            <Space direction="vertical">
                <AccountSearch toogle={props}/>
                <AccountList/>
            </Space>
        </>
    );
}
export default AccountSideBar