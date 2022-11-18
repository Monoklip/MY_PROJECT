import { useEffect, useState } from "react";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import TruckDaf from "../../../../Truck/Truck-Daf/TruckDaf";
import TruckIveco from "../../../../Truck/Truck-Iveco/TruckIveco";
import TruckMan from "../../../../Truck/Truck-Man/TruckMan";
import TruckMercedes from "../../../../Truck/Truck-Mercedes/TruckMercedes";
import TruckRenault from "../../../../Truck/Truck-Renault/TruckRenault";
import TruckScania from "../../../../Truck/Truck-Scania/TruckScania";
import TruckVolvo from "../../../../Truck/Truck-Volvo/TruckVolvo";
import "./admin-account-truck-delete.scss";
import AdminAccountTruckDeleteItem from "./AdminAccountTruckDeleteItem/AdminAccountTruckDeleteItem";

const AdminAccountTruckDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/truck");
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
            <h1>Удалити Вантажівку</h1>
            
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
                            <option value="Daf">Daf</option>
                            <option value="Iveco">Iveco</option>
                            <option value="Man">Man</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Renault">Renault</option>
                            <option value="Scania">Scania</option>
                            <option value="Volvo">Volvo</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                                {nameAutoDel === "none" && <NoneAuto />}
                                {nameAutoDel === "Daf" && <TruckDaf />}
                                {nameAutoDel === "Iveco" && <TruckIveco />}
                                {nameAutoDel === "Man" && <TruckMan />}
                                {nameAutoDel === "Mercedes" && <TruckMercedes />}
                                {nameAutoDel === "Renault" && <TruckRenault />}
                                {nameAutoDel === "Scania" && <TruckScania />}
                                {nameAutoDel === "Volvo" && <TruckVolvo />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountTruckDeleteItem
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

export default AdminAccountTruckDelete;
