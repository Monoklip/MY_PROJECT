import UserAccountDelete from "./UserAccountDelete/UserAccountDelete";
import UserAccountPost from "./UserAccountPost/UserAccountPost";
import "./user-account.scss";

const UserAccount = (props: {
    dataUser: {
        name: string;
        login: string;
    };
}) => {
    return (
        <div className="user-account">
            <div className="user-account-welcome">
                <h1>Ласкаво просимо {props.dataUser.name}</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvZN2tKpwq2Q6ca2Vl5a4qXX88GexQ22QYQ&usqp=CAU" alt="" />
            </div>
            <div className="user-account-setting">
                <UserAccountPost
                    dataUser={{
                        login: props.dataUser.login
                    }}
                />
                <UserAccountDelete dataUser={{
                        login: props.dataUser.login
                    }}/>
            </div>
        </div>
    );
};

export default UserAccount;
