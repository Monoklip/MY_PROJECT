import { useState } from "react";
import "./moto.scss";
import ListMoto from "./ListMoto/ListMoto";
import NoneMoto from "./NoneMoto/NoneMoto";
import YearsMoto from "./YearsMoto/YearsMoto";
import MotoHarleyDavidson from "./Moto-Harley-Davidson/MotoHarleyDavidson";
import MotoHonda from "./Moto-Honda/MotoHonda";
import MotoJawa from "./Moto-Jawa/MotoJawa";
import MotoKawasaki from "./Moto-Kawasaki/MotoKawasaki";
import MotoSuzuki from "./Moto-Suzuki/MotoSuzuki";
import MotoYamaha from "./Moto-Yamaha/MotoYamaha";

const Moto = () => {

    const [urlMoto, setUrlMoto] = useState("http://localhost:3000/moto");
    const [dataMoto, setDataMoto] = useState([]);

    async function getAuto() {
            const response = await fetch(urlMoto);
            const dataMoto = await response.json();
            setDataMoto(dataMoto);
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
                        <option value="Harley-Davidson">Harley-Davidson</option>
                        <option value="Honda">Honda</option>
                        <option value="Jawa">Jawa</option>
                        <option value="Kawasaki">Kawasaki</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Yamaha">Yamaha</option>
                    </select>
                </div>
                <div className="auto-search-modelAuto">
                    <label>Виберіть модель:</label>
                    <select onChange={handleModelAutoChange}>
                        {nameAuto === "none" && <NoneMoto />}
                        {nameAuto === "Harley-Davidson" && <MotoHarleyDavidson />}
                        {nameAuto === "Honda" && <MotoHonda />}
                        {nameAuto === "Jawa" && <MotoJawa />}
                        {nameAuto === "Kawasaki" && <MotoKawasaki />}
                        {nameAuto === "Suzuki" && <MotoSuzuki />}
                        {nameAuto === "Yamaha" && <MotoYamaha />}
                    </select>
                </div>
                <div className="auto-search-yearAuto">
                    <label>Виберіть рік:</label>
                    <select onChange={handleYearAutoChange}>
                        <YearsMoto />
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
                {dataMoto.map(elem => {
                    return <ListMoto 
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

export default Moto;