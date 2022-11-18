import "./admin-account-car-post.scss";
import { SetStateAction, useState } from "react";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import Audi from "../../../../Car/Audi/Audi";
import Bmw from "../../../../Car/Bmw/Bmw";
import Mercedes from "../../../../Car/Mercedes/Mercedes";
import Volkswagen from "../../../../Car/Volkswagen/Volkswagen";
import Peugeot from "../../../../Car/Peugeot/Peugeot";
import Renault from "../../../../Car/Renault/Renault";
import Kia from "../../../../Car/Kia/Kia";
import Hyundai from "../../../../Car/Hyundai/Hyundai";
import Opel from "../../../../Car/Opel/Opel";
import Honda from "../../../../Car/Honda/Honda";
import Ford from "../../../../Car/Ford/Ford";
import YearsAuto from "../../../../Car/YearsAuto/YearsAuto";

const AdminAccountCarPost = (props: { urlAdmin: any }) => {
    const [postCarName, setPostCarName] = useState("none");
    const [postCarModal, setPostCarModal] = useState("all");
    const [postCarYear, setPostCarYear] = useState(0);
    const [postCarPrice, setPostCarPrice] = useState(0);
    const [postCarKm, setPostCarKm] = useState(0);
    const [postCarImage, setPostCarImage] = useState("");
    const [postCarInfo, setPostCarInfo] = useState("");
    const [postCarPhone, setPostCarPhone] = useState(0);

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

    const handlePostCarPhoneChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPostCarPhone(event.target.value as unknown as number);
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
                        phone: postCarPhone
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

    return (
        <div className="admin-account-postCar">
            <h1>Добавити Автомобіль</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Audi">Audi</option>
                <option value="Bmw">Bmw</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Kia">Kia</option>
                <option value="Hyndai">Hyndai</option>
                <option value="Opel">Opel</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneAuto />}
                {postCarName === "Audi" && <Audi />}
                {postCarName === "Bmw" && <Bmw />}
                {postCarName === "Mercedes" && <Mercedes />}
                {postCarName === "Volkswagen" && <Volkswagen />}
                {postCarName === "Peugeot" && <Peugeot />}
                {postCarName === "Renault" && <Renault />}
                {postCarName === "Kia" && <Kia />}
                {postCarName === "Hyndai" && <Hyundai />}
                {postCarName === "Opel" && <Opel />}
                {postCarName === "Honda" && <Honda />}
                {postCarName === "Ford" && <Ford />}
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
            <p>Введіть номер телефону:</p>
            <input type="tel" pattern="[+][3][8][(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}" required  className="numberValid" placeholder="+38(063)367-22-92" onChange={handlePostCarPhoneChange}/>
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

export default AdminAccountCarPost;
