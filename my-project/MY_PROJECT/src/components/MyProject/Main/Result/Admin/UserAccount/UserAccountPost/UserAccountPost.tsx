import "./user-account-post.scss";
import { SetStateAction, useState } from "react";
import NoneAuto from "../../../Car/NoneAuto/NoneAuto";
import Audi from "../../../Car/Audi/Audi";
import Bmw from "../../../Car/Bmw/Bmw";
import Mercedes from "../../../Car/Mercedes/Mercedes";
import Volkswagen from "../../../Car/Volkswagen/Volkswagen";
import Peugeot from "../../../Car/Peugeot/Peugeot";
import Renault from "../../../Car/Renault/Renault";
import Kia from "../../../Car/Kia/Kia";
import Hyundai from "../../../Car/Hyundai/Hyundai";
import Opel from "../../../Car/Opel/Opel";
import Honda from "../../../Car/Honda/Honda";
import Ford from "../../../Car/Ford/Ford";
import YearsAuto from "../../../Car/YearsAuto/YearsAuto";

const UserAccountPost = (props: { dataUser: { login: string } }) => {
    const [postCarName, setPostCarName] = useState("none");
    const [postCarModal, setPosrCarModal] = useState("all");
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
        setPosrCarModal(event.target.value);
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

    const personId = () => {
        return props.dataUser.login;
    };

    const [url, setUrl] = useState("http://localhost:3000/cars");

    async function postCar() {
        try {
            if (
                postCarName !== "none" &&
                postCarModal !== "all" &&
                postCarYear !== 0 &&
                postCarKm > 0 &&
                postCarPrice > 0
            ) {
                await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        name: postCarName,
                        model: postCarModal,
                        year: postCarYear,
                        km: postCarKm,
                        price: postCarPrice,
                        image: postCarImage,
                        info: postCarInfo,
                        personId: personId(),
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                alert("Авто успішно додано");
                return console.log("data post successfully");
            } else {
                alert("Ви не заповнили всіх даних");
            }
        } catch (error) {
            return console.log(error);
        }
    }

    return (
        <div className="user-account-postCar">
            <h1>Добавити авто</h1>
            <p><span style={{color:'red'}}>* </span>Введіть назву авто:</p>
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
            <p><span style={{color:'red'}}>* </span>Введіть марку авто:</p>
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
            <p><span style={{color:'red'}}>* </span>Введіть рік авто:</p>
            <select onChange={handlePostCarYearChange}>
                <YearsAuto />
            </select>
            <p><span style={{color:'red'}}>* </span>Введіть ціну авто:</p>
            <input type="number" onChange={handlePostCarPriceCheage} />
            <p><span style={{color:'red'}}>* </span>Введіть кілометраж авто:</p>
            <input type="number" onChange={handlePostCarKmChange} />
            <p>Добавте фото (URL) авто:</p>
            <input type="text" onChange={handlePostCarImageChange} />
            <br />
            <p>Додаткова інформація про авто:</p>
            <textarea onChange={handlePostCarInfoChange} />
            <button className="user-account-postCar-btn" onClick={postCar}>
                Добавити авто
            </button>
            <p><span style={{color:'red'}}>* </span>- Обовязкове поле для заповнення</p>
        </div>
    );
};

export default UserAccountPost;
