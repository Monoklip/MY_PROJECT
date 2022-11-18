import AdminAccountAgriculturalPost from "./AdminAccountAgriculturalPost/AdminAccountAgriculturalPost";
import AdminAccountAgriculturalDelete from "./AdminAccountAgriculturalDelete/AdminAccountAgriculturalDelete";

const AdminAccountAgricultural = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountAgriculturalPost urlAdmin={props.urlAdmin} />
            <AdminAccountAgriculturalDelete />
        </>
    );
};

export default AdminAccountAgricultural;