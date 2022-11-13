import AdminAccountCarPost from "./AdminAccountCarPost/AdminAccountCarPost";
import AdminAccountCarDelete from "./AdminAccountCarDelete/AdminAccountCarDelete";

const AdminAccountCar = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountCarPost urlAdmin={props.urlAdmin} />
            <AdminAccountCarDelete />
        </>
    );
};

export default AdminAccountCar;
