import AdminAccountMachineryPost from "./AdminAccountMachineryPost/AdminAccountMachineryPost";
import AdminAccountMachineryDelete from "./AdminAccountMachineryDelete/AdminAccountMachineryDelete";

const AdminAccountMachinery = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountMachineryPost urlAdmin={props.urlAdmin} />
            <AdminAccountMachineryDelete />
        </>
    );
};

export default AdminAccountMachinery;