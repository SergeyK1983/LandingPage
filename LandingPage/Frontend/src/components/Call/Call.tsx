import { FunctionComponent, ReactElement } from "react";
import style from "./call.module.scss";

const Call: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.call}>
            <div className={style.call_container}></div>
        </section>
    );
};

export default Call;
