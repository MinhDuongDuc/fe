import { Space } from "antd";
import SiderHead from "./SiderHead";
import Favorites from "./Favorites";
import ConversationList from "../../pages/c/index";

const ConversationSideBar = (props) => {
    return (
        <>
            <Space direction="vertical">
                <SiderHead toogle={props}/>
                {/* <Favorites /> */}
                <ConversationList />
            </Space>
        </>
    );

}
export default ConversationSideBar