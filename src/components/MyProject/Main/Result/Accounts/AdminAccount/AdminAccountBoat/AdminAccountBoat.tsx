import AdminAccountBoatPost from "./AdminAccountBoatPost/AdminAccountBoatPost";
import AdminAccountBoatDelete from "./AdminAccountBoatDelete/AdminAccountBoatDelete";

const AdminAccountBoat = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountBoatPost urlAdmin={props.urlAdmin} />
            <AdminAccountBoatDelete />
        </>
    );
};

export default AdminAccountBoat;
