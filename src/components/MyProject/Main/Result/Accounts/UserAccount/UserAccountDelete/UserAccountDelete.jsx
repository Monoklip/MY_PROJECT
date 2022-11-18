import { useEffect, useState } from "react";
import './user-account-delete.scss';
import UserAccountDeleteAgricultucal from "./UserAccountDeleteAgricultucal/UserAccountDeleteAgricultucal";
import UserAccountDeleteBoat from "./UserAccountDeleteBoat/UserAccountDeleteBoat";
import UserAccountDeleteBus from "./UserAccountDeleteBus/UserAccountDeleteBus";
import UserAccountDeleteCar from "./UserAccountDeleteCar/UserAccountDeleteCar";
import UserAccountDeleteMachinery from "./UserAccountDeleteMachinery/UserAccountDeleteMachinery";
import UserAccountDeleteMoto from "./UserAccountDeleteMoto/UserAccountDeleteMoto";
import UserAccountDeleteTrailer from "./UserAccountDeleteTrailer/UserAccountDeleteTrailer";
import UserAccountDeleteTruck from "./UserAccountDeleteTruck/UserAccountDeleteTruck";

const UserAccountDelete = (props) => {

    const [urlCar, setUrlCar] = useState("http://localhost:3000/cars");
    const [dataCar, setDataCar] = useState([]);

    async function getCar() {
        const response = await fetch(urlCar);
        const dataCar = await response.json();
        setDataCar(dataCar);
    };

     useEffect(()=>{
        getCar()
    },[dataCar]);

    const [urlTruck, setUrlTruck] = useState("http://localhost:3000/truck");
    const [dataTruck, setDataTruck] = useState([]);

    async function getTruck() {
        const response = await fetch(urlTruck);
        const dataTruck = await response.json();
        setDataTruck(dataTruck);
    };

    useEffect(()=>{
        getTruck()
    },[dataTruck]);

    const [urlMoto, setUrlMoto] = useState("http://localhost:3000/moto");
    const [dataMoto, setDataMoto] = useState([]);

    async function getMoto() {
        const response = await fetch(urlMoto);
        const dataMoto = await response.json();
        setDataMoto(dataMoto);
    };

    useEffect(()=>{
        getMoto()
    },[dataMoto]);

    const [urlTrailer, setUrlTrailer] = useState("http://localhost:3000/trailer");
    const [dataTrailer, setDataTrailer] = useState([]);

    async function getTrailer() {
        const response = await fetch(urlTrailer);
        const dataTrailer = await response.json();
        setDataTrailer(dataTrailer);
    };

    useEffect(()=>{
        getTrailer()
    },[dataTrailer]);

    const [urlMachinery, setUrlMachinery] = useState("http://localhost:3000/machinery");
    const [dataMachinery, setDataMachinery] = useState([]);

    async function getMachinery() {
        const response = await fetch(urlMachinery);
        const dataMachinery = await response.json();
        setDataMachinery(dataMachinery);
    };

    useEffect(()=>{
        getMachinery()
    },[dataMachinery]);

    const [urlAgricultural, setUrlAgricultural] = useState("http://localhost:3000/agricultural");
    const [dataAgricultural, setDataAgricultural] = useState([]);

    async function getAgricultural() {
        const response = await fetch(urlAgricultural);
        const dataAgricultural = await response.json();
        setDataAgricultural(dataAgricultural);
    };

    useEffect(()=>{
        getAgricultural()
    },[dataAgricultural]);

    const [urlBus, setUrlBus] = useState("http://localhost:3000/bus");
    const [dataBus, setDataBus] = useState([]);

    async function getBus() {
        const response = await fetch(urlBus);
        const dataBus = await response.json();
        setDataBus(dataBus);
    };

    useEffect(()=>{
        getBus()
    },[dataBus]);

    const [urlBoat, setUrlBoat] = useState("http://localhost:3000/boat");
    const [dataBoat, setDataBoat] = useState([]);

    async function getBoat() {
        const response = await fetch(urlBoat);
        const dataBoat = await response.json();
        setDataBoat(dataBoat);
    };

    useEffect(()=>{
        getBoat()
    },[dataBoat]);

    return (
        <div className="user-account-delete">
            <h1 onClick={getCar}>Мої оголошення</h1>
                {dataCar.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteCar elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataTruck.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteTruck elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataMoto.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteMoto elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataTrailer.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteTrailer elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataMachinery.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteMachinery elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataAgricultural.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteAgricultucal elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataBus.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteBus elem={elem} key={elem.id}/>
                    ;}
                })}
                {dataBoat.map((elem) => {
                    if(elem.personId === props.dataUser.login){
                        return <UserAccountDeleteBoat elem={elem} key={elem.id}/>
                    ;}
                })}
        </div>
    );
};

export default UserAccountDelete;
