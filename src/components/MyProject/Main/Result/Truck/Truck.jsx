import { useState } from "react";
import ListTruck from "./ListTruck/ListTruck";
import YearsTruck from "./YearsTruck/YearsTruck";
import NoneTruck from "./NoneTruck/NoneTruck";
import TruckDaf from "./Truck-Daf/TruckDaf";
import TruckIveco from "./Truck-Iveco/TruckIveco";
import TruckMan from "./Truck-Man/TruckMan";
import TruckMercedes from "./Truck-Mercedes/TruckMercedes";
import TruckRenault from "./Truck-Renault/TruckRenault";
import TruckScania from "./Truck-Scania/TruckScania";
import TruckVolvo from "./Truck-Volvo/TruckVolvo";

const Truck = () => {

    const [urlTruck, setUrlTruck] = useState("http://localhost:3000/truck");
    const [dataTruck, setDataTruck] = useState([]);

    async function getAuto() {
            const response = await fetch(urlTruck);
            const dataTruck = await response.json();
            setDataTruck(dataTruck);
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
                <h1 className="auto-search-title">Пошук Вантажівок:</h1>
                <div className="auto-search-nameAuto">
                    <label>Виберіть марку:</label>
                    <br />
                    <select onChange={handleNameAutoChange}>
                        <option value="none">Будь-яка</option>
                        <option value="Daf">Daf</option>
                        <option value="Iveco">Iveco</option>
                        <option value="Man">Man</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Renault">Renault</option>
                        <option value="Scania">Scania</option>
                        <option value="Volvo">Volvo</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneTruck />}
                        {nameAuto === "Daf" && <TruckDaf />}
                        {nameAuto === "Iveco" && <TruckIveco />}
                        {nameAuto === "Man" && <TruckMan />}
                        {nameAuto === "Mercedes" && <TruckMercedes />}
                        {nameAuto === "Renault" && <TruckRenault />}
                        {nameAuto === "Scania" && <TruckScania />}
                        {nameAuto === "Volvo" && <TruckVolvo />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsTruck />
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
                {dataTruck.map(elem => {
                    return <ListTruck 
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

export default Truck;
