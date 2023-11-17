import { FunctionComponent, ReactElement } from "react";
import style from "./burger.module.scss";

const BurgerMenu: FunctionComponent = (): ReactElement => {
    return (
        <>
            <div className={style.burger}></div>
        </>
    );
};

export default BurgerMenu;
