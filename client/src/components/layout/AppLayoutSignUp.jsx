import { Outlet } from "react-router-dom";
import SidebarSignUp from "../sidebar/SidebarSignUp";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <SidebarSignUp />
        <Outlet />
    </div>;
};

export default AppLayout;
