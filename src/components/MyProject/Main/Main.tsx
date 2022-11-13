import Catalog from "./Catalog/Catalog";
import "./main.scss";
import Result from "./Result/Result";

const Main = (props: { catalog: boolean }) => {
    return (
        <div>
            {props.catalog === true && <Catalog />}
            <Result />
        </div>
    );
};

export default Main;
