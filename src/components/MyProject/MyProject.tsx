import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./my-project.scss";

const MyProject = () => {
    const [catalog, setCatalog] = useState<boolean>(false);

    return (
        <div className="my-project">
            <Header catalog={catalog} setCatalog={setCatalog} />
            <Main catalog={catalog} />
            {/* <Footer/> */}
        </div>
    );
};

export default MyProject;