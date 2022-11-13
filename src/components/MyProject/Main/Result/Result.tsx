import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts/Accounts";
import Agricultural from "./Agricultural/Agricultural";
import Boat from "./Boat/Boat";
import Bus from "./Bus/Bus";
import Car from "./Car/Car";
import Home from "./Home/Home";
import Machinery from "./Machinery/Machinery";
import Moto from "./Moto/Moto";
import NotPage from "./NotPage/NotPage";
import "./result.scss";
import Trailer from "./Trailer/Trailer";
import Truck from "./Truck/Truck";

const Result = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/car" element={<Car />}></Route>
                <Route path="/truck" element={<Truck/>}></Route>
                <Route path="/moto" element={<Moto/>}></Route>
                <Route path="/trailer" element={<Trailer/>}></Route>
                <Route path="/machinery" element={<Machinery/>}></Route>
                <Route path="/agricultural" element={<Agricultural/>}></Route>
                <Route path="/bus" element={<Bus/>}></Route>
                <Route path="/boat" element={<Boat/>}></Route>
                <Route path="/account" element={<Accounts />}></Route>
                <Route path="*" element={<NotPage />}></Route>
            </Routes>
        </div>
    );
};

export default Result;
