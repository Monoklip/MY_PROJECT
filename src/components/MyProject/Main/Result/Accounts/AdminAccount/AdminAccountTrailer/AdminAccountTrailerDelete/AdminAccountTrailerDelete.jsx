import { useEffect, useState } from "react";
import NoneTrailer from "../../../../Trailer/NoneAuto/NoneTrailer";
import TrailerBodex from "../../../../Trailer/Trailer-Bodex/TrailerBodex";
import TrailerFruehauf from "../../../../Trailer/Trailer-Fruehauf/TrailerFruehauf";
import TrailerKrone from "../../../../Trailer/Trailer-Krone/TrailerKrone";
import TrailerSchmitz from "../../../../Trailer/Trailer-Schmitz/TrailerSchmitz";
import TrailerWielton from "../../../../Trailer/Trailer-Wielton/TrailerWielton";
import "./admin-account-trailer-delete-item.scss";
import AdminAccountTrailerDeleteItem from "./AdminAccountTrailerDeleteItem/AdminAccountTrailerDeleteItem";

const AdminAccountTrailerDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/trailer");
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
            <h1>Удалити Прицеп</h1>
            
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
                            <option value="Bodex">Bodex</option>
                            <option value="Fruehauf">Fruehauf</option>
                            <option value="Krone">Krone</option>
                            <option value="Schmitz">Schmitz</option>
                            <option value="Wielton">Wielton</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneTrailer />}
                            {nameAutoDel === "Bodex" && <TrailerBodex />}
                            {nameAutoDel === "Fruehauf" && <TrailerFruehauf />}
                            {nameAutoDel === "Krone" && <TrailerKrone />}
                            {nameAutoDel === "Schmitz" && <TrailerSchmitz />}
                            {nameAutoDel === "Wielton" && <TrailerWielton />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountTrailerDeleteItem
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

export default AdminAccountTrailerDelete;
