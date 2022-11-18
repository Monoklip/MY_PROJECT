import "./admin-account-truck-post.scss";
import { SetStateAction, useState } from "react";
import YearsAuto from "../../../../Car/YearsAuto/YearsAuto";
import TruckDaf from "../../../../Truck/Truck-Daf/TruckDaf";
import TruckIveco from "../../../../Truck/Truck-Iveco/TruckIveco";
import TruckMercedes from "../../../../Truck/Truck-Mercedes/TruckMercedes";
import TruckMan from "../../../../Truck/Truck-Man/TruckMan";
import TruckRenault from "../../../../Truck/Truck-Renault/TruckRenault";
import TruckScania from "../../../../Truck/Truck-Scania/TruckScania";
import TruckVolvo from "../../../../Truck/Truck-Volvo/TruckVolvo";
import NoneTruck from "../../../../Truck/NoneTruck/NoneTruck";

const AdminAccountTruckPost = (props: { urlAdmin: any }) => {
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
            <h1>Добавити Вантажівку</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Daf">Daf</option>
                <option value="Iveco">Iveco</option>
                <option value="Man">Man</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Renault">Renault</option>
                <option value="Scania">Scania</option>
                <option value="Volvo">Volvo</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneTruck />}
                {postCarName === "Daf" && <TruckDaf />}
                {postCarName === "Iveco" && <TruckIveco />}
                {postCarName === "Man" && <TruckMan />}
                {postCarName === "Mercedes" && <TruckMercedes />}
                {postCarName === "Renault" && <TruckRenault />}
                {postCarName === "Scania" && <TruckScania />}
                {postCarName === "Volvo" && <TruckVolvo />}

            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть рік:
            </p>
            <select onChange={handlePostCarYearChange}>
                <YearsAuto />
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

export default AdminAccountTruckPost;
