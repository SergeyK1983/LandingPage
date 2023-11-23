import { FunctionComponent, ReactElement } from "react";
import style from "./burger.module.scss";
import { Link } from "react-router-dom";
import icon from "../../assets/burger_menu_services_icon.svg";
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import { openServices } from "../../store/slices/burgerMenuSlice.ts";
import classNames from "classnames";

const BurgerMenu: FunctionComponent = (): ReactElement => {
    const dispatch = useAppDispatch();

    const isServicesOpen = useAppSelector(
        (state) => state.burgerMenu.openServices,
    );

    const handleClick = () => {
        dispatch(openServices());
    };

    return (
        <>
            <div className={style.burger_container}>
                <div className={style.burger_content}>
                    <div className={style.burger_content_container}>
                        <Link
                            to={"https://dezorientaciya.ru/"}
                            className={style.burger_link}
                        >
                            О нас
                        </Link>
                    </div>
                    <div className={style.burger_content_container}>
                        <div className={style.services_container}>
                            <span className={style.services_text}>Услуги</span>
                            <button className={style.services_button}>
                                <img
                                    src={icon}
                                    alt={"меню"}
                                    className={
                                        isServicesOpen
                                            ? classNames(
                                                  style.services_img,
                                                  style.services_img__open,
                                              )
                                            : style.services_img
                                    }
                                    onClick={handleClick}
                                />
                            </button>
                        </div>
                        {isServicesOpen && (
                            <div className={style.services_content_container}>
                                <div
                                    className={
                                        style.services_content_container__link
                                    }
                                >
                                    <Link
                                        className={style.services_link}
                                        to={
                                            "https://dezorientaciya.ru/services/"
                                        }
                                    >
                                        Учащимся
                                    </Link>
                                </div>
                                <div
                                    className={
                                        style.services_content_container__link
                                    }
                                >
                                    <Link
                                        className={style.services_link}
                                        to={
                                            "https://dezorientaciya.ru/services/"
                                        }
                                    >
                                        Взрослым
                                    </Link>
                                </div>
                                <div
                                    className={
                                        style.services_content_container__link
                                    }
                                >
                                    <Link
                                        className={style.services_link}
                                        to={
                                            "https://dezorientaciya.ru/services/"
                                        }
                                    >
                                        Карьерная консультация
                                    </Link>
                                </div>
                                <div
                                    className={
                                        style.services_content_container__link
                                    }
                                >
                                    <Link
                                        className={style.services_link}
                                        to={
                                            "https://dezorientaciya.ru/services/"
                                        }
                                    >
                                        Готовое резюме
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={style.burger_content_container}>
                        <Link
                            to={"https://dezorientaciya.ru/#otz"}
                            className={style.burger_link}
                        >
                            Отзывы
                        </Link>
                    </div>
                    <div className={style.burger_content_container}>
                        <Link
                            to={"https://dezorientaciya.ru/blog/"}
                            className={style.burger_link}
                        >
                            Блог
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;
