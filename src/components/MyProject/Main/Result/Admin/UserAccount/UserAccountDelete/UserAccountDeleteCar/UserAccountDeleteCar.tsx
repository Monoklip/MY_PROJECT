import { useState } from "react";
import "./user-account-delete-car.scss";

const UserAccountDeleteCar = (props: {
    elem: {
        name: any;
        model: any;
        year: any;
        price: any;
        km: any;
        image: any;
        id: any;
        personId: any;
    };
}) => {
    const { name, model, year, price, km, image, id, personId } = props.elem;

    const [icon, setIcon] = useState(false);

    const move = () => {
        setIcon(true);
    };

    const leave = () => {
        setIcon(false);
    };

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/cars/${id}`);

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

    return (
        <div onMouseMove={move} onMouseLeave={leave} className="list-carDel">
            {icon && (
                <button onClick={deleteCar} className="list-carDel-deleteIcon">
                    <img
                        src="https://img.icons8.com/sf-regular/512/trash.png"
                        alt=""
                    />
                </button>
            )}
            <div className="list-carDel-image">
                <img src={`${image}`} alt="" />
            </div>
            <hr />
            {icon === false && (
                <div className="list-carDel-info">
                    <p>
                        {name} {model} <span className="year">{year}</span>
                    </p>
                    <p>
                        <span className="price">{price} $</span>
                        <span className="km">{km} тис.км</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default UserAccountDeleteCar;
