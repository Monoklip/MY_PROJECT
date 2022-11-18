import { useState } from "react";
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
import CarDetails from "./CarDetails/CarDetails";

const Result = () => {

    const [data, setData] = useState([]);

    (async function beka() {
        const response = await fetch('http://localhost:3000/cars');
        const data = await response.json();
        setData(data);
    }());

    console.log(data);

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
                {data.map((elem) => {
                    return <Route path={`/car/${elem.name + '-' + elem.model + '-' + elem.year + '-' + elem.id}`} element={<CarDetails elem={elem} />}></Route>
                })}
                <Route path="*" element={<NotPage />}></Route>
            </Routes>
        </div>
    );
};

export default Result;
