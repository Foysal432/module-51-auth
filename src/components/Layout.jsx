import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const Layout = () => {
    return (
        <div>
           <div>
           <NavBar></NavBar>
           </div>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;