import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "../../assets/logo.svg";
import mobileBurgerMenuIcon from "../../assets/mobileBurgerMenuIcon.svg";
import { useDispatch } from "react-redux";
import { toggleBurger } from "../../store/slices/burgerMenuSlice.ts";

const Header: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
    return (
        <>
            <header className={style.header}>
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
                                to={"https://dezorientaciya.ru/buisnes/"}
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
                            <img
                                src={mobileBurgerMenuIcon}
                                alt={"Меню"}
                                className={style.burger_menu_icon}
                                onClick={() => {
                                    dispatch(toggleBurger());
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
