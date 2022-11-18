import { useState } from 'react';
import './car-details.scss';

const CarDetails = (props: { elem: { image: string; name: string; model: string; year: number; price: number; info: string; km: number; phone: number }; }) => {

    const [number, setNumber] = useState('Купити авто');

    const buyBtn = () => {
        setNumber(`${props.elem.phone}`)
    };

    return(
        <div className="auto-info">
            <div className="auto-info-image">
                <img src={`${props.elem.image}`} alt="" />
            </div>
            <div className="auto-info-deteils">
                <h1>{props.elem.name} {props.elem.model}</h1>
                <p>Рік випуску: <span>{props.elem.year}</span></p>
                <p>Пробіг: <span>{props.elem.km} тис.км</span></p>
                <p>Ціна: <span>{props.elem.price} $</span></p>
                <p>Детальніше: <span> {props.elem.info}</span></p>
                <button className='auto-info-deteils-btn' onClick={buyBtn}>{number}</button>
            </div>
        </div>
    )
};

export default CarDetails;