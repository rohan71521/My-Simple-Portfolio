import { Outlet } from "react-router-dom";
import NavB from "../NavB/NavB";


function Root(){

    return(
        <div>
            <NavB></NavB>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;