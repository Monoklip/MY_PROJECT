import { SetStateAction, useState } from "react";
import "./accounts.scss";
import AdminAccount from "./AdminAccount/AdminAccount";
import UserAccount from "./UserAccount/UserAccount";

const Accounts = () => {
    const [singInDisplay, setSingInDisplay] = useState(true);
    const [registrDisplay, setRegistrInDisplay] = useState(false);
    const [adminDisplay, setAdminDisplay] = useState(false);
    const [userDisplay, setUserDisplay] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [loginReg, setLoginReg] = useState<string>("");
    const [passwordReg, setPasswordReg] = useState<string>("");
    const [nameReg, setNameReg] = useState<string>("");

    const [urlUser, setUrlUser] = useState("http://localhost:3000/users");
    const [dataUser, setDataUser] = useState([]);

    async function getUser() {
        const response = await fetch(urlUser);
        const dataUser = await response.json();
        setDataUser(dataUser);

        dataUser.filter(
            (elem: {
                login: string;
                password: string;
                name: SetStateAction<string>;
            }) => {
                if (login === elem.login && password === elem.password) {
                    setUserDisplay(true);
                    setSingInDisplay(false);
                    setRegistrInDisplay(false);
                    setAdminDisplay(false);
                    setName(elem.name);
                } else if (login === "admin" && password === "admin") {
                    setSingInDisplay(false);
                    setRegistrInDisplay(false);
                    setAdminDisplay(true);
                    setUserDisplay(false);
                } else {
                    setErrorPassword(true);
                }
            }
        );
    }

    const handleLoginChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPassword(event.target.value);
    };

    const handleRegistrNameChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setNameReg(event.target.value);
    };

    const handleRegistrLoginChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setLoginReg(event.target.value);
    };

    const handleRegistrPasswordChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPasswordReg(event.target.value);
    };

    const registrFormOpen = () => {
        setSingInDisplay(false);
        setRegistrInDisplay(true);
    };

    const singInFormOpen = () => {
        setSingInDisplay(true);
        setRegistrInDisplay(false);
    };

    async function createUser() {
        const response = await fetch(urlUser);
        const dataUser = await response.json();

        const be = dataUser.some((elem: { login: string }) => elem.login === loginReg);
        if (be == false) {
            if (
                nameReg.trim() !== "" &&
                loginReg.trim() !== "" &&
                passwordReg.trim() !== ""
            ) {
                await fetch(urlUser, {
                    method: "POST",
                    body: JSON.stringify({
                        name: nameReg,
                        login: loginReg,
                        password: passwordReg,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                alert("Аккаунт успішно зареєстровано");

                setLoginReg('');
                setPasswordReg('');
                setNameReg('');

            } else {
                alert("Ви не заповнили всі поля");
            }
        } else {
            alert("Такий Логін вже використовується");
        }
    }

    return (
        <>
            {singInDisplay && (
                <div className="admin">
                    <h1>Вхід</h1>
                    <p>Введіть логін:</p>
                    <input type="text" onChange={handleLoginChange} />
                    <p>Введіть пароль:</p>
                    <input type="text" onChange={handlePasswordChange} />
                    <br />
                    {errorPassword && (
                        <p style={{ color: "red" }}>
                            Невірний логін або пароль
                        </p>
                    )}
                    <button className="admin-btn" onClick={getUser}>
                        Увійти
                    </button>
                    <br />
                    <button
                        className="admin-btn-registr"
                        onClick={registrFormOpen}
                    >
                        Зареєструватися
                    </button>
                </div>
            )}
            {registrDisplay && (
                <div className="admin">
                    <h1>Реєстрація</h1>
                    <p>Введіть Ім'я</p>
                    <input type="text" onChange={handleRegistrNameChange} />
                    <p>Введіть логін:</p>
                    <input type="text" onChange={handleRegistrLoginChange} />
                    <p>Введіть пароль:</p>
                    <input type="text" onChange={handleRegistrPasswordChange} />
                    <br />
                    <button className="admin-btn" onClick={createUser}>
                        Зареєструватися
                    </button>
                    <br />
                    <button
                        className="admin-btn-registr"
                        onClick={singInFormOpen}
                    >
                        Увійти
                    </button>
                </div>
            )}
            {adminDisplay && <AdminAccount />}
            {userDisplay && (
                <UserAccount
                    dataUser={{
                        login: login,
                        name: name,
                    }}
                />
            )}
        </>
    );
};

export default Accounts;
