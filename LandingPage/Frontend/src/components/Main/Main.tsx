import { FunctionComponent, ReactElement, useEffect } from "react";
import style from "./main.module.scss";
import chatBotImage from "../../assets/chatBotImage.svg";
import BotIcon from "../Bot/BotIcon.tsx";
import StartMessage from "../StartMessage/StartMessage.tsx";
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import ChatWindow from "../Bot/ChatWindow.tsx";
import classNames from "classnames";
import { toggleStartMessageRender } from "../../store/slices/startMessageSlice.ts";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";

const Main: FunctionComponent = (): ReactElement => {
    const dispatch = useAppDispatch();

    const chatOpen = useAppSelector((state) => state.chatBot.open);

    const startMessageVisible = useAppSelector(
        (state) => state.startMessage.visible,
    );

    const burgerMenuState = useAppSelector(
        (state) => state.burgerMenu.openBurger,
    );

    useEffect(() => {
        if (startMessageVisible) return;

        const timer = setTimeout(() => {
            dispatch(toggleStartMessageRender());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.main_container}>
                    {burgerMenuState && (
                        <div className={style.burger}>
                            <BurgerMenu />
                        </div>
                    )}
                    <div className={style.main_container__info}>
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
                    </div>
                    <img
                        alt={"Картинка Чат Бота"}
                        src={chatBotImage}
                        className={style.main_image_container}
                    />
                    <div className={style.startMessage_container}>
                        {startMessageVisible && <StartMessage />}
                    </div>
                    <div className={style.chatWindow_container}>
                        {chatOpen && (
                            <ChatWindow
                                typeOfDevice={"desktop"}
                                chatOpen={chatOpen}
                            />
                        )}
                    </div>
                    <div className={style.botIcon_container}>
                        <BotIcon typeOfDevice={"desktop"} />
                    </div>
                    <div className={style.botIcon_container_mobile}>
                        <BotIcon typeOfDevice={"mobile"} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Main;
