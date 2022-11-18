import { useEffect, useState } from "react";
import Audi from "../../../../Car/Audi/Audi";
import Bmw from "../../../../Car/Bmw/Bmw";
import Ford from "../../../../Car/Ford/Ford";
import Honda from "../../../../Car/Honda/Honda";
import Hyundai from "../../../../Car/Hyundai/Hyundai";
import Kia from "../../../../Car/Kia/Kia";
import Mercedes from "../../../../Car/Mercedes/Mercedes";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import Opel from "../../../../Car/Opel/Opel";
import Peugeot from "../../../../Car/Peugeot/Peugeot";
import Renault from "../../../../Car/Renault/Renault";
import Volkswagen from "../../../../Car/Volkswagen/Volkswagen";
import "./admin-account-car-delete-item.scss";
import AdminAccountCarDeleteItem from "./AdminAccountCarDeleteItem/AdminAccountCarDeleteItem";
import AdminAccountDeleteCars from "./AdminAccountCarDeleteItem/AdminAccountCarDeleteItem";

const AdminAccountCarDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/cars");
    const [data, setData] = useState([]);

    async function getAdminCar() {
        const response = await fetch(urlCars);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getAdminCar()
    },[data])

    const [nameAutoDel, setNameAuto] = useState("none");
    const [modelAutoDel, setModelAuto] = useState("all");

    const handleNameAutoDelChange = (event) => {
        setNameAuto(event.target.value);
    };

    const handleModelAutoDelChange = (event) => {
        setModelAuto(event.target.value);
    };

    return (
        <div className="admin-account-delete">
            <h1>Удалити Автомобіль</h1>
            <div className="admin-account-delete-list">
                <div className="admin-account-delete-list-btnAllCars">
                    <button onClick={getAdminCar}>Показати всі</button>
                </div>
                <div className="admin-account-delete-list-settingCar">
                    <div className="admin-account-list-title">
                        <p>Виберіть марку:</p>
                        <p>Виберіть модель:</p>
                    </div>
                    <div className="admin-account-list-select">
                        <select onChange={handleNameAutoDelChange}>
                                <option value="none">Будь-яка</option>
                                <option value="Audi">Audi</option>
                                <option value="Bmw">Bmw</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Volkswagen">Volkswagen</option>
                                <option value="Peugeot">Peugeot</option>
                                <option value="Renault">Renault</option>
                                <option value="Kia">Kia</option>
                                <option value="Hyundai">Hyundai</option>
                                <option value="Opel">Opel</option>
                                <option value="Honda">Honda</option>
                                <option value="Ford">Ford</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                                {nameAutoDel === "none" && <NoneAuto />}
                                {nameAutoDel === "Audi" && <Audi />}
                                {nameAutoDel === "Bmw" && <Bmw />}
                                {nameAutoDel === "Mercedes" && <Mercedes />}
                                {nameAutoDel === "Volkswagen" && <Volkswagen />}
                                {nameAutoDel === "Peugeot" && <Peugeot />}
                                {nameAutoDel === "Renault" && <Renault />}
                                {nameAutoDel === "Kia" && <Kia />}
                                {nameAutoDel === "Hyundai" && <Hyundai />}
                                {nameAutoDel === "Opel" && <Opel />}
                                {nameAutoDel === "Honda" && <Honda />}
                                {nameAutoDel === "Ford" && <Ford />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountCarDeleteItem
                            elem={elem}
                            key={elem.id}
                            nameAutoDel={nameAutoDel}
                            modelAutoDel={modelAutoDel}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AdminAccountCarDelete;
