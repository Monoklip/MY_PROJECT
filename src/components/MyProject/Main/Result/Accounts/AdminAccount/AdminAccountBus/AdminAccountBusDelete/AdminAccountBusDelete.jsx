import { useEffect, useState } from "react";
import BusBogdan from "../../../../Bus/Bus-Bogdan/BusBogdan";
import BusIveco from "../../../../Bus/Bus-Iveco/BusIveco";
import BusMercedes from "../../../../Bus/Bus-Mercedes/BusMercedes";
import BusNeoplan from "../../../../Bus/Bus-Neoplan/BusNeoplan";
import BusRenault from "../../../../Bus/Bus-Renault/BusRenault";
import BusSetra from "../../../../Bus/Bus-Setra/BusSetra";
import NoneBus from "../../../../Bus/NoneBus/NoneBus";
import "./admin-account-bus-delete-item.scss";
import AdminAccountBusDeleteItem from "./AdminAccountBusDeleteItem/AdminAccountBusDeleteItem";

const AdminAccountBusDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/bus");
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
            <h1>Удалити Автобус</h1>
            
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
                            <option value="Bogdan">Bogdan</option>
                            <option value="Iveco">Iveco</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Neoplan">Neoplan</option>
                            <option value="Renault">Renault</option>
                            <option value="Setra">Setra</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneBus />}
                            {nameAutoDel === "Bogdan" && <BusBogdan />}
                            {nameAutoDel === "Iveco" && <BusIveco />}
                            {nameAutoDel === "Mercedes" && <BusMercedes />}
                            {nameAutoDel === "Neoplan" && <BusNeoplan />}
                            {nameAutoDel === "Renault" && <BusRenault />}
                            {nameAutoDel === "Setra" && <BusSetra />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountBusDeleteItem
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

export default AdminAccountBusDelete;
