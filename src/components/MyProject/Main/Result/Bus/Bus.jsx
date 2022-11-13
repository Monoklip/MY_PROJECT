import { useState } from "react";
import BusBogdan from "./Bus-Bogdan/BusBogdan";
import BusIveco from "./Bus-Iveco/BusIveco";
import BusMercedes from "./Bus-Mercedes/BusMercedes";
import BusNeoplan from "./Bus-Neoplan/BusNeoplan";
import BusRenault from "./Bus-Renault/BusRenault";
import BusSetra from "./Bus-Setra/BusSetra";
import "./bus.scss";
import ListBus from "./ListBus/ListBus";
import NoneBus from "./NoneBus/NoneBus";
import YearsBus from "./YearsBus/YearsBus";

const Bus = () => {

    const [urlBus, setUrlBus] = useState("http://localhost:3000/bus");
    const [dataBus, setDataBus] = useState([]);

    async function getAuto() {
            const response = await fetch(urlBus);
            const dataBus = await response.json();
            setDataBus(dataBus);
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
                        <option value="Bogdan">Bogdan</option>
                        <option value="Iveco">Iveco</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Neoplan">Neoplan</option>
                        <option value="Renault">Renault</option>
                        <option value="Setra">Setra</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneBus />}
                        {nameAuto === "Bogdan" && <BusBogdan />}
                        {nameAuto === "Iveco" && <BusIveco />}
                        {nameAuto === "Mercedes" && <BusMercedes />}
                        {nameAuto === "Neoplan" && <BusNeoplan />}
                        {nameAuto === "Renault" && <BusRenault />}
                        {nameAuto === "Setra" && <BusSetra />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsBus />
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
                {dataBus.map(elem => {
                    return <ListBus
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

export default Bus;
