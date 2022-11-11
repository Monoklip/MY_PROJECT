import { useState } from "react";
import Audi from "./Audi/Audi";
import Bmw from "./Bmw/Bmw";
import Ford from "./Ford/Ford";
import Honda from "./Honda/Honda";
import Kia from "./Kia/Kia";
import "./car.scss";
import Mercedes from "./Mercedes/Mercedes";
import NoneAuto from "./NoneAuto/NoneAuto";
import Opel from "./Opel/Opel";
import Peugeot from "./Peugeot/Peugeot";
import Renault from "./Renault/Renault";
import Volkswagen from "./Volkswagen/Volkswagen";
import YearsAuto from "./YearsAuto/YearsAuto";
import ListCars from "./ListCars/ListCars";
import Hyundai from "./Hyundai/Hyundai";

const Car = () => {

    // const [resultSearchCars, setResultSearchCars] = useState(true);

    const [urlCar, setUrlCar] = useState("http://localhost:3000/cars");
    const [data, setData] = useState([]);

    async function getCar() {
            const response = await fetch(urlCar);
            const data = await response.json();
            setData(data);
    };

    console.log(data);

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
        <div className="car">
            <div className="car-search">
                <h1 className="car-search-title">Пошук:</h1>
                <div className="car-search-nameAuto">
                    <label>Виберіть марку:</label>
                    <br />
                    <select onChange={handleNameAutoChange}>
                        <option value="none">Будь-яка</option>
                        <option value="Audi">Audi</option>
                        <option value="Bmw">Bmw</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Renault">Renault</option>
                        <option value="Kia">Kia</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Opel">Opel</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div className="car-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneAuto />}
                        {nameAuto === "Audi" && <Audi />}
                        {nameAuto === "Bmw" && <Bmw />}
                        {nameAuto === "Mercedes" && <Mercedes />}
                        {nameAuto === "Volkswagen" && <Volkswagen />}
                        {nameAuto === "Peugeot" && <Peugeot />}
                        {nameAuto === "Renault" && <Renault />}
                        {nameAuto === "Kia" && <Kia />}
                        {nameAuto === "Hyundai" && <Hyundai />}
                        {nameAuto === "Opel" && <Opel />}
                        {nameAuto === "Honda" && <Honda />}
                        {nameAuto === "Ford" && <Ford />}
                    </select>
                </div>
                <div className="car-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsAuto />
                    </select>
                </div>
                <div className="car-search-priceAuto">
                    <label>Виберіть ціну:</label>
                    <input
                        className="car-search-priceAuto-inputMin"
                        type="number"
                        onChange={handlePriceAutoMinChange}
                        placeholder={"Від $"}
                    />
                    <input
                        className="car-search-priceAuto-inputMax"
                        type="number"
                        onChange={handlePriceAutoMaxChange}
                        placeholder={"До $"}
                    />
                </div>
                <button className="car-search-btn-search" onClick={getCar}>
                    Знайти авто
                </button>
            </div>
            <div className="car-result">
                {data.map(elem => {
                    return <ListCars 
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

export default Car;
