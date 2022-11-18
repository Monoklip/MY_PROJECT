import { useEffect, useState } from "react";
import UserAccountDeleteCar from "./UserAccountDeleteCar/UserAccountDeleteCar";

const UserAccountDelete = (props) => {

    const [url, setUrl] = useState("http://localhost:3000/cars");
    const [data, setData] = useState([]);

    async function getCar() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getCar()
    },[data])

    return (
        <div className="user-account-delete">
                {data.map((elem) => {
                    if(elem.personId === props.dataUser.login){return (
                        <UserAccountDeleteCar elem={elem} key={elem.id}/>
                    );}
                })}
        </div>
    );
};

export default UserAccountDelete;
