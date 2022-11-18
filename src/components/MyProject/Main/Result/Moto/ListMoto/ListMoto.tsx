import "./list-moto.scss";

const ListMoto = (props: {
    elem?: any;
    nameAuto?: string;
    modelAuto?: string;
    yearAuto?: number;
    priceAutoMin?: number;
    priceAutoMax?: number;
}) => {
    const { name, model, year, price, km, image, id } = props.elem;

    const { nameAuto, modelAuto, yearAuto, priceAutoMin, priceAutoMax } = props;

    if (name === nameAuto && nameAuto !== "none") {
        if (model === modelAuto && modelAuto !== "all") {
            return (
                <a className="list-car">
                    <div className="list-car-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    <div className="list-car-info">
                        <p>
                            {name} {model} <span className="year">{year}</span>
                        </p>
                        <p>
                            <span className="price">{price} $</span>
                            <span className="km">{km} тис.км</span>
                        </p>
                    </div>
                </a>
            );
        } else if (modelAuto === "all") {
            return (
                <div className="list-car">
                    <div className="list-car-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    <div className="list-car-info">
                        <p>
                            {name} {model} <span className="year">{year}</span>
                        </p>
                        <p>
                            <span className="price">{price} $</span>
                            <span className="km">{km} тис.км</span>
                        </p>
                    </div>
                </div>
            );
        } else {
            return <h1>Нажаль таких авто не знайдено</h1>;
        }
    } else if (nameAuto === "none") {
        return (
            <>
                <div className="list-car">
                    <div className="list-car-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    <div className="list-car-info">
                        <p>
                            {name} {model} <span className="year">{year}</span>
                        </p>
                        <p>
                            <span className="price">{price} $</span>
                            <span className="km">{km} тис.км</span>
                        </p>
                    </div>
                </div>
            </>
        );
    }
};

export default ListMoto;
