import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "../../assets/logo.svg";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon.tsx";

const Header: FunctionComponent = (): ReactElement => {
    return (
        <>
            <header className={style.header} id={"header"}>
                <div className={style.header_container}>
                    <div className={style.header_elements}>
                        <div className={style.header_container__logo}>
                            <Link to={"https://dezorientaciya.ru/"}>
                                <img
                                    src={logo}
                                    alt={"логотип"}
                                    className={style.header_logo}
                                />
                            </Link>
                            <Link
                                to={"https://dezorientaciya.ru/"}
                                className={style.nav_link_logo}
                            >
                                Дизориентация
                            </Link>
                        </div>
                        <div className={style.header_container__nav}>
                            <Link
                                to={"https://dezorientaciya.ru/"}
                                className={style.nav_link}
                            >
                                О нас
                            </Link>
                            <Link
                                to={"https://dezorientaciya.ru/services/"}
                                className={style.nav_link}
                            >
                                Услуги
                            </Link>
                            <Link
                                to={"https://dezorientaciya.ru/#otz"}
                                className={style.nav_link}
                            >
                                Отзывы
                            </Link>
                            <Link
                                to={"https://dezorientaciya.ru/blog/"}
                                className={style.nav_link}
                            >
                                Блог
                            </Link>
                        </div>
                        <div className={style.burger_menu}>
                            <BurgerMenuIcon />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
