import "./admin-account-bus-post.scss";
import { SetStateAction, useState } from "react";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import YearsBus from "../../../../Bus/YearsBus/YearsBus";
import BusBogdan from "../../../../Bus/Bus-Bogdan/BusBogdan";
import BusIveco from "../../../../Bus/Bus-Iveco/BusIveco";
import BusMercedes from "../../../../Bus/Bus-Mercedes/BusMercedes";
import BusNeoplan from "../../../../Bus/Bus-Neoplan/BusNeoplan";
import BusRenault from "../../../../Bus/Bus-Renault/BusRenault";
import BusSetra from "../../../../Bus/Bus-Setra/BusSetra";

const AdminAccountBusPost = (props: { urlAdmin: any }) => {
    const [postCarName, setPostCarName] = useState("none");
    const [postCarModal, setPostCarModal] = useState("all");
    const [postCarYear, setPostCarYear] = useState(0);
    const [postCarPrice, setPostCarPrice] = useState(0);
    const [postCarKm, setPostCarKm] = useState(0);
    const [postCarImage, setPostCarImage] = useState("");
    const [postCarInfo, setPostCarInfo] = useState("");

    const handlePostCarNameChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarName(event.target.value);
    };

    const handlePostCarModalChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarModal(event.target.value);
    };

    const handlePostCarYearChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarYear(event.target.value as unknown as number);
    };

    const handlePostCarPriceCheage = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarPrice(event.target.value as unknown as number);
    };

    const handlePostCarKmChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarKm(event.target.value as unknown as number);
    };

    const handlePostCarImageChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarImage(event.target.value);
    };

    const handlePostCarInfoChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarInfo(event.target.value);
    };

    const [urlCars, setUrlCars] = useState(
        `http://localhost:3000/${props.urlAdmin}`
    );

    async function postAdminCar() {
        try {
            if (
                postCarName !== "none" &&
                postCarModal !== "all" &&
                postCarYear !== 0 &&
                postCarKm > 0 &&
                postCarPrice > 0
            ) {
                await fetch(props.urlAdmin, {
                    method: "POST",
                    body: JSON.stringify({
                        name: postCarName,
                        model: postCarModal,
                        year: postCarYear,
                        km: postCarKm,
                        price: postCarPrice,
                        image: postCarImage,
                        info: postCarInfo,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                alert("Авто успішно додано");
            } else {
                alert("Ви не заповнили всіх даних");
            }
        } catch (error) {
            return console.log(error);
        }
    }

    console.log(props.urlAdmin);

    return (
        <div className="admin-account-postCar">
            <h1>Добавити Автобус</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Bogdan">Bogdan</option>
                <option value="Iveco">Iveco</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Neoplan">Neoplan</option>
                <option value="Renault">Renault</option>
                <option value="Setra">Setra</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneAuto />}
                {postCarName === "Bogdan" && <BusBogdan />}
                {postCarName === "Iveco" && <BusIveco />}
                {postCarName === "Mercedes" && <BusMercedes />}
                {postCarName === "Neoplan" && <BusNeoplan />}
                {postCarName === "Renault" && <BusRenault />}
                {postCarName === "Setra" && <BusSetra />}
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть рік:
            </p>
            <select onChange={handlePostCarYearChange}>
                <YearsBus />
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть ціну:
            </p>
            <input type="number" onChange={handlePostCarPriceCheage} />
            <p>
                <span style={{ color: "red" }}>* </span>Введіть кілометраж:
            </p>
            <input type="number" onChange={handlePostCarKmChange} />
            <p>Добавте фото (URL):</p>
            <input type="text" onChange={handlePostCarImageChange} />
            <br />
            <p>Додаткова інформація:</p>
            <textarea onChange={handlePostCarInfoChange} />
            <button
                className="admin-account-postCar-btn"
                onClick={postAdminCar}
            >
                Добавити
            </button>
            <p>
                <span style={{ color: "red" }}>* </span>- Обовязкове поле для
                заповнення
            </p>
        </div>
    );
};

export default AdminAccountBusPost;
