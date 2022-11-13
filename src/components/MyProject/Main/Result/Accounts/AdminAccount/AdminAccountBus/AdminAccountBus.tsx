import AdminAccountBusPost from "./AdminAccountBusPost/AdminAccountBusPost";
import AdminAccountBusDelete from "./AdminAccountBusDelete/AdminAccountBusDelete";

const AdminAccountBus = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountBusPost urlAdmin={props.urlAdmin} />
            <AdminAccountBusDelete />
        </>
    );
};

export default AdminAccountBus;