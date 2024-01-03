import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;