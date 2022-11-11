import { Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import AdminAccount from "./Admin/AdminAccount/AdminAccount";
import Car from "./Car/Car";
import Home from "./Home/Home";
import NotPage from "./NotPage/NotPage";
import "./result.scss";

const Result = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/car" element={<Car />}></Route>
                {/* <Route path="/truck" element={<Truck/>}></Route>
                <Route path="/moto" element={<Moto/>}></Route>
                <Route path="/trailer" element={<Trailer/>}></Route>
                <Route path="/machinery" element={<Machinery/>}></Route>
                <Route path="/agricultural" element={<Agricultural/>}></Route>
                <Route path="/bus" element={<Bus/>}></Route>
                <Route path="/boat" element={<Boat/>}></Route> */}
                <Route path="/account" element={<Admin />}></Route>
                {/* <Route path="/account-admin" element={<AdminAccount />}></Route> */}
                <Route path="*" element={<NotPage />}></Route>                
            </Routes>
        </div>
    );
};

export default Result;
