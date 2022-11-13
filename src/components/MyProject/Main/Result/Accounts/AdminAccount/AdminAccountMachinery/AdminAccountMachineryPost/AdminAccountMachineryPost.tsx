import "./admin-account-machinery-post.scss";
import { SetStateAction, useState } from "react";
import YearsMachinery from "../../../../Machinery/YearsMachinery/YearsMachinery";
import NoneMachinery from "../../../../Machinery/NoneMachinery/NoneMachinery";
import MachineryDaf from "../../../../Machinery/Machinery-Daf/MachineryDaf";
import MachineryJcb from "../../../../Machinery/Machinery-Jcb/MachineryJcb";
import MachineryKamaz from "../../../../Machinery/Machinery-Kamaz/MachineryKamaz";
import MachineryMan from "../../../../Machinery/Machinery-Man/MachineryMan";
import MachineryZil from "../../../../Machinery/Machinery-Zil/MachineryZil";

const AdminAccountMachineryPost = (props: { urlAdmin: any }) => {
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
            <h1>Добавити Спецтехніку</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Daf">Daf</option>
                <option value="Jcb">Jcb</option>
                <option value="Kamaz">Kamaz</option>
                <option value="Man">Man</option>
                <option value="Zil">Zil</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneMachinery />}
                {postCarName === "Daf" && <MachineryDaf />}
                {postCarName === "Jcb" && <MachineryJcb />}
                {postCarName === "Kamaz" && <MachineryKamaz />}
                {postCarName === "Man" && <MachineryMan />}
                {postCarName === "Zil" && <MachineryZil />}
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть рік:
            </p>
            <select onChange={handlePostCarYearChange}>
                <YearsMachinery />
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
            <p>Додаткова інформація про:</p>
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

export default AdminAccountMachineryPost;
