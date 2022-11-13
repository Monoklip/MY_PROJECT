import "./admin-account-moto-post.scss";
import { SetStateAction, useState } from "react";
import NoneAuto from "../../../../Car/NoneAuto/NoneAuto";
import YearsAuto from "../../../../Car/YearsAuto/YearsAuto";
import MotoHarleyDavidson from "../../../../Moto/Moto-Harley-Davidson/MotoHarleyDavidson";
import MotoHonda from "../../../../Moto/Moto-Honda/MotoHonda";
import MotoJawa from "../../../../Moto/Moto-Jawa/MotoJawa";
import MotoKawasaki from "../../../../Moto/Moto-Kawasaki/MotoKawasaki";
import MotoSuzuki from "../../../../Moto/Moto-Suzuki/MotoSuzuki";
import MotoYamaha from "../../../../Moto/Moto-Yamaha/MotoYamaha";

const AdminAccountMotoPost = (props: { urlAdmin: any }) => {
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
        <div className="admin-account-postMoto">
            <h1>Добавити Мотоцикл</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Harley-Davidson">Harley-Davidson</option>
                <option value="Honda">Honda</option>
                <option value="Jawa">Jawa</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneAuto />}
                {postCarName === "Harley-Davidson" && <MotoHarleyDavidson />}
                {postCarName === "Honda" && <MotoHonda />}
                {postCarName === "Jawa" && <MotoJawa />}
                {postCarName === "Kawasaki" && <MotoKawasaki />}
                {postCarName === "Suzuki" && <MotoSuzuki />}
                {postCarName === "Yamaha" && <MotoYamaha />}
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
                className="admin-account-postMoto-btn"
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

export default AdminAccountMotoPost;
