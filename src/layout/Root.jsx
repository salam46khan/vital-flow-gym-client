import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <p>head</p>
        </div>
    );
};

export default Root;