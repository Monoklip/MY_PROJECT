import { useState } from "react";
import './admin-account-bus-delete-item.scss';

const AdminAccountBusDeleteItem = (props: {
    elem?: any;
    nameAutoDel?: any;
    modelAutoDel?: any;
}) => {
    const { name, model, year, price, km, image, id } = props.elem;
    const { nameAutoDel, modelAutoDel } = props;

    const [icon, setIcon] = useState(false);

    const move = () => {
        setIcon(true);
    };

    const leave = () => {
        setIcon(false);
    };


    const [delUrl, setDelUrl] = useState(`http://localhost:3000/bus/${id}`);

    async function deleteCar() {
        try {
            await fetch(delUrl, {
                method: "DELETE",
            });
            return console.log("deleted successfully");
        } catch (error) {
            return console.log(error);
        }
    }

    if (name === nameAutoDel && nameAutoDel !== "none") {
        if (model === modelAutoDel && modelAutoDel !== "all") {
            return (
                <div onMouseMove={move} onMouseLeave={leave} className="list-carDel">
                    {icon &&
                        <button onClick={deleteCar} className="list-carDel-deleteIcon">
                            <img src="https://img.icons8.com/sf-regular/512/trash.png" alt="" />
                        </button>
                    }
                    <div className="list-carDel-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    {icon === false &&
                        <div className="list-carDel-info">
                            <p>
                                {name} {model} <span className="year">{year}</span>
                            </p>
                            <p>
                                <span className="price">{price} $</span>
                                <span className="km">{km} тис.км</span>
                            </p>
                        </div>
                    }
                </div>
            );
        } else if (modelAutoDel === "all") {
            return (
                <div onMouseMove={move} onMouseLeave={leave} className="list-carDel">
                    {icon &&
                        <button onClick={deleteCar} className="list-carDel-deleteIcon">
                            <img src="https://img.icons8.com/sf-regular/512/trash.png" alt="" />
                        </button>
                    }
                    <div className="list-carDel-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    {icon === false &&
                        <div className="list-carDel-info">
                            <p>
                                {name} {model} <span className="year">{year}</span>
                            </p>
                            <p>
                                <span className="price">{price} $</span>
                                <span className="km">{km} тис.км</span>
                            </p>
                        </div>
                    }
                </div>
            );
        }
    } else if (nameAutoDel === "none") {
        return (
            <>
                <div onMouseMove={move} onMouseLeave={leave} className="list-carDel">
                    {icon &&
                        <button onClick={deleteCar} className="list-carDel-deleteIcon">
                            <img src="https://img.icons8.com/sf-regular/512/trash.png" alt="" />
                        </button>
                    }
                    <div className="list-carDel-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <hr />
                    {icon === false &&
                        <div className="list-carDel-info">
                            <p>
                                {name} {model} <span className="year">{year}</span>
                            </p>
                            <p>
                                <span className="price">{price} $</span>
                                <span className="km">{km} тис.км</span>
                            </p>
                        </div>
                    }
                </div>
            </>
        );
    }
};

export default AdminAccountBusDeleteItem;
