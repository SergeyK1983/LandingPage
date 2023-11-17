import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import style from "./main.module.scss";
import chatBotImage from "../../assets/chatBotImage.svg";
import BotIcon from "../Bot/BotIcon.tsx";
import StartMessage from "../StartMessage/StartMessage.tsx";
import { useAppSelector } from "../../types/hooks.ts";
import ChatWindow from "../Bot/ChatWindow.tsx";
import { useDispatch } from "react-redux";
import { showStartMessage } from "../../store/slices/startMessageSlice.ts";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import classNames from "classnames";

const Main: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();

    const startMessageVisibility = useAppSelector(
        (state) => state.startMessage.visible,
    );

    const burgerState = useAppSelector((state) => state.burgerMenu.openBurger);

    const chatOpen = useAppSelector((state) => state.chatBot.open);

    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (chatOpen) return;
        if (!open) return;
        const show = setTimeout(() => {
            if (!chatOpen) {
                dispatch(showStartMessage());
                setOpen(false);
            }
        }, 5000);
        return () => {
            clearInterval(show);
        };
    }, [open, chatOpen]);

    return (
        <>
            <main className={style.main}>
                <div className={style.main_container}>
                    {burgerState && <BurgerMenu />}
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
                    <div className={style.bot_container}>
                        <div className={style.bot_container_position}>
                            <div className={style.bot_container_chat}>
                                {startMessageVisibility && <StartMessage />}
                                {chatOpen && <ChatWindow chatOpen={chatOpen} />}
                            </div>
                            <div className={style.bot_container_icon}>
                                <BotIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Main;
