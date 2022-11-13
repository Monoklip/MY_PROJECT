import "./user-account.scss";
import { useState } from "react";
import UserAccountCarPost from "./UserAccountCarPost/UserAccountCarPost";
import UserAccountTruckPost from "./UserAccountTruckPost/UserAccountTruckPost";
import UserAccountMotoPost from "./UserAccountMotoPost/UserAccountMotoPost";
import UserAccountDelete from "./UserAccountDelete/UserAccountDelete";

const UserAccount = (props: {
    dataUser: {
        name: string;
        login: string;
    };
}) => {

    const [carUserDisplay, setCarUserDisplay] = useState(true);
    const [truckUserDisplay, setTruckUserDisplay] = useState(false);
    const [motoUserDisplay, setMotoUserDisplay] = useState(false);
    const [trailerUserDisplay, setTrailerUserDisplay] =useState(false);
    const [machineryUserDisplay, setMachineryUserDisplay] = useState(false);
    const [agriculturalUserDisplay, setAgriculturalUserDisplay] = useState(false);
    const [busUserDisplay, setBusUserDisplay] = useState(false);
    const [boatUserDisplay, setBoatUserDisplay] = useState(false);

    const carUserDisplayBtn = () => {
        setCarUserDisplay(true);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };

    const truckUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(true)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };
    const motokUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(true)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };
    const trailerkUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(true)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };
    const machinaryUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(true)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };
    const agriculturalUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(true)
        setBusUserDisplay(false)
        setBoatUserDisplay(false);
    };
    const busUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(true)
        setBoatUserDisplay(false);
    };
    const boatUserDisplayBtn = () => {
        setCarUserDisplay(false);
        setTruckUserDisplay(false)
        setMotoUserDisplay(false)
        setTrailerUserDisplay(false)
        setMachineryUserDisplay(false)
        setAgriculturalUserDisplay(false)
        setBusUserDisplay(false)
        setBoatUserDisplay(true);
    };
    
    return (
        <div className="user-account">
            <div className="user-account-welcome">
                <h1>Ласкаво просимо <span>{props.dataUser.name}</span></h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvZN2tKpwq2Q6ca2Vl5a4qXX88GexQ22QYQ&usqp=CAU" alt="" />
            </div>
            <div className="admin-account-catalog">
                <h1>Виберіть категорію:</h1>
                <button
                    className="admin-account-catalog-icon"
                    onClick={carUserDisplayBtn}
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
                    onClick={truckUserDisplayBtn}
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
                    onClick={motokUserDisplayBtn}
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
                    onClick={trailerkUserDisplayBtn}
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
                    onClick={machinaryUserDisplayBtn}
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
                    onClick={agriculturalUserDisplayBtn}
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
                    onClick={busUserDisplayBtn}
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
                    onClick={boatUserDisplayBtn}
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
            <div className="user-account-setting">
                {carUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {truckUserDisplay &&
                    <UserAccountTruckPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {motoUserDisplay &&
                    <UserAccountMotoPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {trailerUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {machineryUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {agriculturalUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {busUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                {boatUserDisplay &&
                    <UserAccountCarPost 
                        dataUser={{
                            login: props.dataUser.login
                        }}/>
                }
                <UserAccountDelete dataUser={{
                    login: props.dataUser.login
                }}/>
            </div>
        </div>
    );
};

export default UserAccount;
