import AdminAccountTruckDelete from "./AdminAccountTruckDelete/AdminAccountTruckDelete";
import AdminAccountTruckPost from "./AdminAccountTruckPost/AdminAccountTruckPost";

const AdminAccountTruck = (props: { urlAdmin: any; }) => {
    return(
        <>
            <AdminAccountTruckPost urlAdmin={props.urlAdmin} />
            <AdminAccountTruckDelete />
        </>
    )
};

export default AdminAccountTruck;