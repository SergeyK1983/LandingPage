import style from "./greetings.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import classNames from "classnames";
import chatBotImageDesktop from "../../assets/chatBotImage.svg";
import chatBotImageMobileTablet from "../../assets/chatBotImageMobileTablet.png";
import { useAppSelector } from "../../types/hooks.ts";
import StartChatButton from "../StartChatButton/StartChatButton.tsx";

const Greetings = () => {
    const burgerMenuState = useAppSelector(
        (state) => state.burgerMenu.openBurger,
    );
    return (
        <>
            <section className={style.greetings_container}>
                <div className={style.greetings_container_position}>
                    {burgerMenuState && (
                        <div className={style.burger}>
                            <BurgerMenu />
                        </div>
                    )}
                    <div className={style.greetings_container__info}>
                        <span className={style.info_greetings}>
                            привет, я ваш
                            <br /> чат-помощник!
                        </span>
                        <ul className={style.info_ul}>
                            <li className={style.info_li}>
                                Точный расчёт финансовой ценности
                            </li>
                            <li className={style.info_li}>
                                Осознанные решения в сфере карьеры
                            </li>
                            <li className={style.info_li}>
                                Мотивация и уверенность
                            </li>
                            <li
                                className={classNames(
                                    style.info_li,
                                    style.info_li_client,
                                )}
                            >
                                40% клиентов меняют карьеру, 90% из них лучше
                                понимают свой потенциал
                            </li>
                        </ul>
                        <StartChatButton className={""} />
                    </div>
                    <img
                        alt={"Картинка Чат Бота"}
                        src={chatBotImageDesktop}
                        className={style.greetings_image_desktop}
                    />
                    <img
                        alt={"Картинка Чат Бота"}
                        src={chatBotImageMobileTablet}
                        className={style.greetings_image_mobileTablet}
                    />
                </div>
            </section>
        </>
    );
};

export default Greetings;
