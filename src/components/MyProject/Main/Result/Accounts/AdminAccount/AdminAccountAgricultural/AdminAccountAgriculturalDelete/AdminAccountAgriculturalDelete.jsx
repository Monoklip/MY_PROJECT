import { useEffect, useState } from "react";
import AgriculturalCase from "../../../../Agricultural/Agricultural-Case/AgriculturalCase";
import AgriculturalClaas from "../../../../Agricultural/Agricultural-Claas/AgriculturalClaas";
import AgriculturalKubota from "../../../../Agricultural/Agricultural-Kubota/AgriculturalKubota";
import AgriculturalNewHolland from "../../../../Agricultural/Agricultural-New-Holland/AgriculturalNewHolland";
import AgriculturalYanmar from "../../../../Agricultural/Agricultural-Yanmar/AgriculturalYanmar";
import NoneAgricultural from "../../../../Agricultural/NoneAgricultural/NoneAgricultural";
import "./admin-account-agricultural-delete-item.scss";
import AdminAccountAgriculturalDeleteItem from "./AdminAccountAgriculturalDeleteItem/AdminAccountAgriculturalDeleteItem";

const AdminAccountAgriculturalDelete = () => {

    const [urlCars, setUrlCars] = useState("http://localhost:3000/agricultural");
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
            <h1>Удалити Сільгосптехніку</h1>
            
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
                            <option value="Case">Case</option>
                            <option value="Claas">Claas</option>
                            <option value="Kubota">Kubota</option>
                            <option value="New-Holland">New-Holland</option>
                            <option value="Yanmar">Yanmar</option>
                        </select>
                        <select name="" id="" onChange={handleModelAutoDelChange}>
                            {nameAutoDel === "none" && <NoneAgricultural />}
                            {nameAutoDel === "Case" && <AgriculturalCase />}
                            {nameAutoDel === "Claas" && <AgriculturalClaas />}
                            {nameAutoDel === "Kubota" && <AgriculturalKubota />}
                            {nameAutoDel === "New-Holland" && <AgriculturalNewHolland />}
                            {nameAutoDel === "Yanmar" && <AgriculturalYanmar />}
                        </select>
                    </div>
                </div>
            </div>
            <div className="admin-account-delete-item">
                {data.map((elem) => {
                    return (
                        <AdminAccountAgriculturalDeleteItem
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

export default AdminAccountAgriculturalDelete;
