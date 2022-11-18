import AdminAccountMotoPost from "./AdminAccountMotoPost/AdminAccountMotoPost";
import AdminAccountMotoDelete from "./AdminAccountMotoDelete/AdminAccountMotoDelete";

const AdminAccountMoto = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountMotoPost urlAdmin={props.urlAdmin} />
            <AdminAccountMotoDelete />
        </>
    );
};

export default AdminAccountMoto;
