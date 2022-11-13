import AdminAccountTrailerPost from "./AdminAccountTrailerPost/AdminAccountTrailerPost";
import AdminAccountTrailerDelete from "./AdminAccountTrailerDelete/AdminAccountTrailerDelete";

const AdminAccountTrailer = (props: { urlAdmin: any }) => {
    return (
        <>
            <AdminAccountTrailerPost urlAdmin={props.urlAdmin} />
            <AdminAccountTrailerDelete />
        </>
    );
};

export default AdminAccountTrailer;
