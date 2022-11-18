import { useState } from "react";
import ListMachinery from "./ListMachinery/ListMachinery";
import MachineryDaf from "./Machinery-Daf/MachineryDaf";
import MachineryJcb from "./Machinery-Jcb/MachineryJcb";
import MachineryKamaz from "./Machinery-Kamaz/MachineryKamaz";
import MachineryMan from "./Machinery-Man/MachineryMan";
import MachineryZil from "./Machinery-Zil/MachineryZil";
import NoneMachinery from "./NoneMachinery/NoneMachinery";
import YearsMachinery from "./YearsMachinery/YearsMachinery";

const Machinery = () => {

    const [urlMachinery, setUrlMachinery] = useState("http://localhost:3000/machinery");
    const [dataMachinery, setDataMachinery] = useState([]);

    async function getAuto() {
            const response = await fetch(urlMachinery);
            const dataMachinery = await response.json();
            setDataMachinery(dataMachinery);
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
                <h1 className="auto-search-title">Пошук Спецтехніки:</h1>
                <div className="auto-search-nameAuto">
                    <label>Виберіть марку:</label>
                    <br />
                    <select onChange={handleNameAutoChange}>
                        <option value="none">Будь-яка</option>
                        <option value="Daf">Daf</option>
                        <option value="Jcb">Jcb</option>
                        <option value="Kamaz">Kamaz</option>
                        <option value="Man">Man</option>
                        <option value="Zil">Zil</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneMachinery />}
                        {nameAuto === "Daf" && <MachineryDaf />}
                        {nameAuto === "Jcb" && <MachineryJcb />}
                        {nameAuto === "Kamaz" && <MachineryKamaz />}
                        {nameAuto === "Man" && <MachineryMan />}
                        {nameAuto === "Zil" && <MachineryZil />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsMachinery />
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
                {dataMachinery.map(elem => {
                    return <ListMachinery 
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

export default Machinery;
