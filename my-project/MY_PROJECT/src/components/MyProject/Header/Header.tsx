import "./header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props: { catalog: boolean; setCatalog: (arg0: boolean) => void; }) => {

    const searcAvtoBtn = () => {
        props.setCatalog(!props.catalog);
    };

    const backHomeBtn = () => {
        props.setCatalog(false);
    };

    const btnOpenClose = () => {
        props.setCatalog(false);
    }

    return (
        <header>
            <div className="header-logo">
                <Link to={"/"} className={"header-logo-logotyp"} onClick={backHomeBtn}>
                    <div className="header-logo-logotyp-image"></div>
                </Link>
            </div>
            <div className="header-phone">
                <p>Ви можете нам зателефонувати:</p>
                <a href="tel: +38 063 367 22 92">+38(063)-367-22-92</a>
                <p className="header-phone-name">Mister Michael</p>
            </div>
            <div className="header-btns">
                <Link to={"/account"}>
                    <button className="header-btns-singIn" onClick={btnOpenClose}>Увійти</button>
                </Link>
                <button className="header-btns-search" onClick={searcAvtoBtn}>Пошук авто</button>
            </div>
            <div className="header-singIn">
                <div className="header-image">
                    <img src="https://klike.net/uploads/posts/2019-09/1569228704_1.jpg" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;