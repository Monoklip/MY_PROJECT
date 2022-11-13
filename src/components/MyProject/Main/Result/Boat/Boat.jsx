import { useState } from "react";
import BoatPowerboat from "./Boat-Powerboat/BoatPowerboat";
import BoatShark from "./Boat-Shark/BoatShark";
import BoatTracker from "./Boat-Tracker/BoatTracker";
import BoatYamaha from "./Boat-Yamaha/BoatYamaha";
import "./boat.scss";
import ListBoat from "./ListBoat/ListBoat";
import NoneBoat from "./NoneBoat/NoneBoat";
import YearsBoat from "./YearsBoat/YearsBoat";

const Boat = () => {

    const [urlBoat, setUrlBoat] = useState("http://localhost:3000/boat");
    const [dataBoat, setDataBoat] = useState([]);

    async function getAuto() {
            const response = await fetch(urlBoat);
            const dataBoat = await response.json();
            setDataBoat(dataBoat);
    };

    const [nameAuto, setNameAuto] = useState("none");
    const [modelAuto, setModelAuto] = useState("all");
    const [yearAuto, setYearAuto] = useState(0);
    const [priceAutoMin, setPriceAutoMin] = useState(0);
    const [priceAutoMax, setPriceAutoMax] = useState(1000000);

    const handleNameAutoChange = (event) => {
        setNameAuto(event.target.value);
    };

    const handleModelAutoChange = (event) => {
        setModelAuto(event.target.value);
    };

    const handleYearAutoChange = (event) => {
        setYearAuto(event.target.value);
    };

    const handlePriceAutoMinChange = (event) => {
        if(event.target.value > 0){
            setPriceAutoMin(event.target.value);
        }
        else if(event.target.value <= 0){
            event.target.value = 0;
            setPriceAutoMin(event.target.value);
        }
    };

    const handlePriceAutoMaxChange = (event) => {
        if(event.target.value > 0){
            setPriceAutoMax(event.target.value);
        }
        else if(event.target.value <= 0){
            event.target.value = 0;
            setPriceAutoMax(event.target.value);
        }
    };

    return (
        <div className="auto">
            <div className="auto-search">
                <h1 className="auto-search-title">Пошук:</h1>
                <div className="auto-search-nameAuto">
                    <label>Виберіть марку:</label>
                    <br />
                    <select onChange={handleNameAutoChange}>
                        <option value="none">Будь-яка</option>
                        <option value="Powerboat">Powerboat</option>
                        <option value="Shark">Shark</option>
                        <option value="Tracker">Tracker</option>
                        <option value="Yamaha">Yamaha</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneBoat />}
                        {nameAuto === "Powerboat" && <BoatPowerboat />}
                        {nameAuto === "Shark" && <BoatShark />}
                        {nameAuto === "Tracker" && <BoatTracker />}
                        {nameAuto === "Yamaha" && <BoatYamaha />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsBoat />
                    </select>
                </div>
                <div className="auto-search-priceAuto">
                    <label>Виберіть ціну:</label>
                    <input
                        className="auto-search-priceAuto-inputMin"
                        type="number"
                        onChange={handlePriceAutoMinChange}
                        placeholder={"Від $"}
                    />
                    <input
                        className="auto-search-priceAuto-inputMax"
                        type="number"
                        onChange={handlePriceAutoMaxChange}
                        placeholder={"До $"}
                    />
                </div>
                <button className="auto-search-btn-search" onClick={getAuto}>
                    Знайти авто
                </button>
            </div>
            <div className="auto-result">
                {dataBoat.map(elem => {
                    return <ListBoat
                    elem={elem} 
                    key={elem.id} 
                    nameAuto={nameAuto} 
                    modelAuto={modelAuto} 
                    yearAuto={yearAuto} 
                    priceAutoMin={priceAutoMin}
                    priceAutoMax={priceAutoMax} />
                    })}
            </div>
        </div>
    );
};

export default Boat;
