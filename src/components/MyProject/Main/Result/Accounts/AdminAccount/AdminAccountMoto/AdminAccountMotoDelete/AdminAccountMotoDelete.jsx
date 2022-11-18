import { useEffect, useState } from "react";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import MotoHarleyDavidson from "../../../../Moto/Moto-Harley-Davidson/MotoHarleyDavidson";
import MotoHonda from "../../../../Moto/Moto-Honda/MotoHonda";
import MotoJawa from "../../../../Moto/Moto-Jawa/MotoJawa";
import MotoKawasaki from "../../../../Moto/Moto-Kawasaki/MotoKawasaki";
import MotoSuzuki from "../../../../Moto/Moto-Suzuki/MotoSuzuki";
import MotoYamaha from "../../../../Moto/Moto-Yamaha/MotoYamaha";
import "./admin-account-moto-delete.scss";
import AdminAccountMotoDeleteItem from "./AdminAccountMotoDeleteItem/AdminAccountMotoDeleteItem";

const AdminAccountMotoDelete = () => {

    const [urlMoto, setUrlMoto] = useState("http://localhost:3000/moto");
    const [dataMoto, setDataMoto] = useState([]);

    async function getAdminMoto() {
        const response = await fetch(urlMoto);
        const dataMoto = await response.json();
        setDataMoto(dataMoto);
    };

    useEffect(()=>{
        getAdminMoto()
    },[dataMoto])

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
            <h1>Удалити Мотоцикл</h1>
            
            <div className="admin-account-delete-list">
                <div className="admin-account-delete-list-btnAllMoto">
                    <button onClick={getAdminMoto}>Показати всі</button>
                </div>
                <div className="admin-account-delete-list-settingMoto">
                    <div className="admin-account-list-title">
                        <p>Виберіть марку:</p>
                        <p>Виберіть модель:</p>
                    </div>
                    <div className="admin-account-list-select">
                        <select onChange={handleNameAutoDelChange}>
                            <option value="none">Будь-яка</option>
                            <option value="Harley-Davidson">Harley-Davidson</option>
                            <option value="Honda">Honda</option>
                            <option value="Jawa">Jawa</option>
                            <option value="Kawasaki">Kawasaki</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Yamaha">Yamaha</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneAuto />}
                            {nameAutoDel === "Harley-Davidson" && <MotoHarleyDavidson />}
                            {nameAutoDel === "Honda" && <MotoHonda />}
                            {nameAutoDel === "Jawa" && <MotoJawa />}
                            {nameAutoDel === "Kawasaki" && <MotoKawasaki />}
                            {nameAutoDel === "Suzuki" && <MotoSuzuki />}
                            {nameAutoDel === "Yamaha" && <MotoYamaha />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {dataMoto.map((elem) => {
                    return (
                        <AdminAccountMotoDeleteItem
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

export default AdminAccountMotoDelete;
