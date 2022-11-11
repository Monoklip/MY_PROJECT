import "./catalog.scss";
import { Link } from "react-router-dom";

const Catalog = () => {
    return (
        <div className="catalog">
            <Link to={"/car"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/577/PNG/256/ExecutiveCar_Black_icon-icons.com_54904.png"
                        alt=""
                    />
                </div>
                <p>Легкові</p>
            </Link>
            <Link to={"/truck"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/577/PNG/256/Truck_Yellow_icon-icons.com_54884.png"
                        alt=""
                    />
                </div>
                <p>Вантажівки</p>
            </Link>
            <Link to={"/moto"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/577/PNG/256/TouringMotorcycle_Green_icon-icons.com_54907.png"
                        alt=""
                        className="catalog-auto-moto"
                    />
                </div>
                <p>Мото</p>
            </Link>
            <Link to={"/trailer"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/577/PNG/256/CarTrailer_Red_icon-icons.com_54888.png"
                        alt=""
                    />
                </div>
                <p>Прицепи</p>
            </Link>
            <Link to={"/machinery"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/577/PNG/256/Excavator_Yellow_icon-icons.com_54894.png"
                        alt=""
                    />
                </div>
                <p>Спецтехніка</p>
            </Link>
            <Link to={"/agricultural"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/235/PNG/256/BackhoeLoader_Left_Yellow_26341.png"
                        alt=""
                        className="catalog-auto-tractor"
                    />
                </div>
                <p>Сільгосптехніка</p>
            </Link>
            <Link to={"/bus"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/1047/PNG/256/bus_icon-icons.com_76529.png"
                        alt=""
                    />
                </div>
                <p>Автобуси</p>
            </Link>
            <Link to={"/boat"}>
                <div className="catalog-image">
                    <img
                        src="https://cdn.icon-icons.com/icons2/110/PNG/512/boat_and_trailer_18614.png"
                        alt=""
                    />
                </div>
                <p>Катера</p>
            </Link>
        </div>
    );
};

export default Catalog;
