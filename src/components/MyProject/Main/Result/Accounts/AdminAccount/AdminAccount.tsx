import { useState } from "react";
import "./admin-account.scss";
import AdminAccountCar from "./AdminAccountCar/AdminAccountCar";
import AdminAccountTruck from "./AdminAccountTruck/AdminAccountTruck";
import AdminAccountMoto from "./AdminAccountMoto/AdminAccountMoto";
import AdminAccountTrailer from "./AdminAccountTrailer/AdminAccountTrailer";
import AdminAccountBoat from "./AdminAccountBoat/AdminAccountBoat";
import AdminAccountMachinery from "./AdminAccountMachinery/AdminAccountMachinery";
import AdminAccountBus from "./AdminAccountBus/AdminAccountBus";
import AdminAccountAgricultural from "./AdminAccountAgricultural/AdminAccountAgricultural";

const AdminAccount = () => {
    const [urlAdmin, setUrl] = useState("");

    const carAdmin = () => {
        setUrl("http://localhost:3000/cars");
    };

    const truckAdmin = () => {
        setUrl("http://localhost:3000/truck");
    };

    const motoAdmin = () => {
        setUrl("http://localhost:3000/moto");
    };

    const trailerAdmin = () => {
        setUrl("http://localhost:3000/trailer");
    };

    const machineryAdmin = () => {
        setUrl("http://localhost:3000/machinery");
    };

    const agriculturalAdmin = () => {
        setUrl("http://localhost:3000/agricultural");
    };

    const busAdmin = () => {
        setUrl("http://localhost:3000/bus");
    };

    const boatAdmin = () => {
        setUrl("http://localhost:3000/boat");
    };

    return (
        <div className="admin-account">
            <div className="admin-account-catalog">
                <h1>Виберіть категорію:</h1>
                <button
                    className="admin-account-catalog-icon"
                    onClick={carAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/fluency/512/fiat-500.png"
                            alt=""
                        />
                    </div>
                    <p>Легкові</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={truckAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/color/512/truck--v1.png"
                            alt=""
                        />
                    </div>
                    <p>Вантажівки</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={motoAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/fluency/512/scooter.png"
                            alt=""
                        />
                    </div>
                    <p>Мото</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={trailerAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/color-glass/512/trailer.png"
                            alt=""
                        />
                    </div>
                    <p>Прицепи</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={machineryAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/fluency/512/digger.png"
                            alt=""
                        />
                    </div>
                    <p>Спецтехніка</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={agriculturalAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/color/512/tractor.png"
                            alt=""
                        />
                    </div>
                    <p>Сільгосптехніка</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={busAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/fluency/512/double-decker-bus.png"
                            alt=""
                        />
                    </div>
                    <p>Автобуси</p>
                </button>
                <button
                    className="admin-account-catalog-icon"
                    onClick={boatAdmin}
                >
                    <div className="admin-account-catalog-icon-image">
                        <img
                            src="https://img.icons8.com/emoji/512/motor-boat.png"
                            alt=""
                        />
                    </div>
                    <p>Катера</p>
                </button>
            </div>
            {urlAdmin === "http://localhost:3000/cars" && (
                <div className="admin-account-seting">
                    <AdminAccountCar urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/truck" && (
                <div className="admin-account-seting">
                    <AdminAccountTruck urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/moto" && (
                <div className="admin-account-seting">
                    <AdminAccountMoto urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/trailer" && (
                <div className="admin-account-seting">
                    <AdminAccountTrailer urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/machinery" && (
                <div className="admin-account-seting">
                    <AdminAccountMachinery urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/agricultural" && (
                <div className="admin-account-seting">
                    <AdminAccountAgricultural urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/bus" && (
                <div className="admin-account-seting">
                    <AdminAccountBus urlAdmin={urlAdmin} />
                </div>
            )}
            {urlAdmin === "http://localhost:3000/boat" && (
                <div className="admin-account-seting">
                    <AdminAccountBoat urlAdmin={urlAdmin} />
                </div>
            )}
        </div>
    );
};

export default AdminAccount;
