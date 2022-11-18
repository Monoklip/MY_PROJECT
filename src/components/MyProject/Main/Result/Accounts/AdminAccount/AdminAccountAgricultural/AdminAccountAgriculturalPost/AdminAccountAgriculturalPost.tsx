import "./admin-account-agricultural-post.scss";
import { SetStateAction, useState } from "react";
import YearsAgricultural from "../../../../Agricultural/YearsAgricultural/YearsAgricultural";
import NoneAgricultural from "../../../../Agricultural/NoneAgricultural/NoneAgricultural";
import AgriculturalCase from "../../../../Agricultural/Agricultural-Case/AgriculturalCase";
import AgriculturalClaas from "../../../../Agricultural/Agricultural-Claas/AgriculturalClaas";
import AgriculturalKubota from "../../../../Agricultural/Agricultural-Kubota/AgriculturalKubota";
import AgriculturalNewHolland from "../../../../Agricultural/Agricultural-New-Holland/AgriculturalNewHolland";
import AgriculturalYanmar from "../../../../Agricultural/Agricultural-Yanmar/AgriculturalYanmar";

const AdminAccountAgriculturalPost = (props: { urlAdmin: any }) => {
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
            <h1>Добавити Сільгосптехніку</h1>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть марку:
            </p>
            <select onChange={handlePostCarNameChange}>
                <option value="none">Будь-яка</option>
                <option value="Case">Case</option>
                <option value="Claas">Claas</option>
                <option value="Kubota">Kubota</option>
                <option value="New-Holland">New-Holland</option>
                <option value="Yanmar">Yanmar</option>
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть модель:
            </p>
            <select onChange={handlePostCarModalChange}>
                {postCarName === "none" && <NoneAgricultural />}
                {postCarName === "Case" && <AgriculturalCase />}
                {postCarName === "Claas" && <AgriculturalClaas />}
                {postCarName === "Kubota" && <AgriculturalKubota />}
                {postCarName === "New-Holland" && <AgriculturalNewHolland />}
                {postCarName === "Yanmar" && <AgriculturalYanmar />}
            </select>
            <p>
                <span style={{ color: "red" }}>* </span>Введіть рік:
            </p>
            <select onChange={handlePostCarYearChange}>
                <YearsAgricultural />
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
                Добавити авто
            </button>
            <p>
                <span style={{ color: "red" }}>* </span>- Обовязкове поле для
                заповнення
            </p>
        </div>
    );
};

export default AdminAccountAgriculturalPost;
