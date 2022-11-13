import "./admin-account.scss";
import AdminAccountDelete from "./AdminAccountDelete/AdminAccountDelete";
import AdminAccountPost from "./AdminAccountPost/AdminAccountPost";

const AdminAccount = () => {
    return (
        <div className="admin-account">
            <AdminAccountPost/>
            <AdminAccountDelete/>
        </div>
    );
};

export default AdminAccount;
