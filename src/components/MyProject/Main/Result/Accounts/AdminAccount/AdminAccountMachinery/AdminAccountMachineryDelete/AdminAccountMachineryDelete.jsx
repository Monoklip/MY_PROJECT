import { useEffect, useState } from "react";
import MachineryDaf from "../../../../Machinery/Machinery-Daf/MachineryDaf";
import MachineryJcb from "../../../../Machinery/Machinery-Jcb/MachineryJcb";
import MachineryKamaz from "../../../../Machinery/Machinery-Kamaz/MachineryKamaz";
import MachineryMan from "../../../../Machinery/Machinery-Man/MachineryMan";
import MachineryZil from "../../../../Machinery/Machinery-Zil/MachineryZil";
import NoneMachinery from "../../../../Machinery/NoneMachinery/NoneMachinery";
import "./admin-account-machinery-delete-item.scss";
import AdminAccountMachineryDeleteItem from "./AdminAccountMachineryDeleteItem/AdminAccountMachineryDeleteItem";

const AdminAccountMachineryDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/machinery");
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
            <h1>Удалити Спецтехніку</h1>
            
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
                            <option value="Jcb">Jcb</option>
                            <option value="Kamaz">Kamaz</option>
                            <option value="Man">Man</option>
                            <option value="Zil">Zil</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneMachinery />}
                            {nameAutoDel === "Daf" && <MachineryDaf />}
                            {nameAutoDel === "Jcb" && <MachineryJcb />}
                            {nameAutoDel === "Kamaz" && <MachineryKamaz />}
                            {nameAutoDel === "Man" && <MachineryMan />}
                            {nameAutoDel === "Zil" && <MachineryZil />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountMachineryDeleteItem
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

export default AdminAccountMachineryDelete;
