import { useState } from "react";
import AgriculturalCase from "./Agricultural-Case/AgriculturalCase";
import AgriculturalClaas from "./Agricultural-Claas/AgriculturalClaas";
import AgriculturalKubota from "./Agricultural-Kubota/AgriculturalKubota";
import AgriculturalNewHolland from "./Agricultural-New-Holland/AgriculturalNewHolland";
import AgriculturalYanmar from "./Agricultural-Yanmar/AgriculturalYanmar";
import "./agricultural.scss";
import ListAgricultural from "./ListAgricultural/ListAgricultural";
import NoneAgricultural from "./NoneAgricultural/NoneAgricultural";
import YearsAgricultural from "./YearsAgricultural/YearsAgricultural";

const Agricultural = () => {

    const [urlAgricultural, setUrlAgricultural] = useState("http://localhost:3000/agricultural");
    const [dataAgricultural, setDataAgricultural] = useState([]);

    async function getAuto() {
            const response = await fetch(urlAgricultural);
            const dataAgricultural = await response.json();
            setDataAgricultural(dataAgricultural);
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
                        <option value="Case">Case</option>
                        <option value="Claas">Claas</option>
                        <option value="Kubota">Kubota</option>
                        <option value="New-Holland">New-Holland</option>
                        <option value="Yanmar">Yanmar</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneAgricultural />}
                        {nameAuto === "Case" && <AgriculturalCase />}
                        {nameAuto === "Claas" && <AgriculturalClaas />}
                        {nameAuto === "Kubota" && <AgriculturalKubota />}
                        {nameAuto === "New-Holland" && <AgriculturalNewHolland />}
                        {nameAuto === "Yanmar" && <AgriculturalYanmar />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsAgricultural />
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
                {dataAgricultural.map(elem => {
                    return <ListAgricultural 
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

export default Agricultural;
