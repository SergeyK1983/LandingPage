import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "../../assets/logo.svg";
const Header: FunctionComponent = (): ReactElement => {
    return (
        <>
            <header className={style.header}>
                <div className={style.header_container}>
                    <div className={style.header_container__logo}>
                        <img
                            src={logo}
                            alt={"логотип"}
                            className={style.header_logo}
                        />
                        <Link to={"/"} className={style.nav_link}>
                            Дизориентация
                        </Link>
                    </div>
                    <div className={style.header_container__nav}>
                        <Link to={"/About"} className={style.nav_link}>
                            О нас
                        </Link>
                        <Link to={"/Services"} className={style.nav_link}>
                            Услуги
                        </Link>
                        <Link to={"/Blog"} className={style.nav_link}>
                            Блог
                        </Link>
                        <Link to={"/Reviews"} className={style.nav_link}>
                            Отзывы
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
