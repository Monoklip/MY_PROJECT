import { useState } from "react";
import NoneTrailer from "./NoneAuto/NoneTrailer";
import YearsTrailer from "./YearsTrailer/YearsTrailer";
import ListTrailer from "./ListTrailer/ListTrailer";
import TrailerBodex from "./Trailer-Bodex/TrailerBodex";
import TrailerFruehauf from "./Trailer-Fruehauf/TrailerFruehauf";
import TrailerKrone from "./Trailer-Krone/TrailerKrone";
import TrailerSchmitz from "./Trailer-Schmitz/TrailerSchmitz";
import TrailerWielton from "./Trailer-Wielton/TrailerWielton";

const Trailer = () => {

    const [urlTrailer, setUrlTrailer] = useState("http://localhost:3000/trailer");
    const [dataTrailer, setDataTrailer] = useState([]);

    async function getAuto() {
            const response = await fetch(urlTrailer);
            const dataTrailer = await response.json();
            setDataTrailer(dataTrailer);
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
                <h1 className="auto-search-title">Пошук Прицепів:</h1>
                <div className="auto-search-nameAuto">
                    <label>Виберіть марку:</label>
                    <br />
                    <select onChange={handleNameAutoChange}>
                        <option value="none">Будь-яка</option>
                        <option value="Bodex">Bodex</option>
                        <option value="Fruehauf">Fruehauf</option>
                        <option value="Krone">Krone</option>
                        <option value="Schmitz">Schmitz</option>
                        <option value="Wielton">Wielton</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneTrailer />}
                        {nameAuto === "Bodex" && <TrailerBodex />}
                        {nameAuto === "Fruehauf" && <TrailerFruehauf />}
                        {nameAuto === "Krone" && <TrailerKrone />}
                        {nameAuto === "Schmitz" && <TrailerSchmitz />}
                        {nameAuto === "Wielton" && <TrailerWielton />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsTrailer />
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
                {dataTrailer.map(elem => {
                    return <ListTrailer
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

export default Trailer;
