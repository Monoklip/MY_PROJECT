import { useEffect, useState } from "react";
import BoatPowerboat from "../../../../Boat/Boat-Powerboat/BoatPowerboat";
import BoatShark from "../../../../Boat/Boat-Shark/BoatShark";
import BoatTracker from "../../../../Boat/Boat-Tracker/BoatTracker";
import BoatYamaha from "../../../../Boat/Boat-Yamaha/BoatYamaha";
import NoneBoat from "../../../../Boat/NoneBoat/NoneBoat";
import "./admin-account-boat-delete-item.scss";
import AdminAccountBoatDeleteItem from "./AdminAccountCarDeleteItem/AdminAccountBoatDeleteItem";

const AdminAccountBoatDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/boat");
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
            <h1>Удалити Водний транспорт</h1>
            
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
                            <option value="Powerboat">Powerboat</option>
                            <option value="Shark">Shark</option>
                            <option value="Tracker">Tracker</option>
                            <option value="Yamaha">Yamaha</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneBoat />}
                            {nameAutoDel === "Powerboat" && <BoatPowerboat />}
                            {nameAutoDel === "Shark" && <BoatShark />}
                            {nameAutoDel === "Tracker" && <BoatTracker />}
                            {nameAutoDel === "Yamaha" && <BoatYamaha />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountBoatDeleteItem
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

export default AdminAccountBoatDelete;
