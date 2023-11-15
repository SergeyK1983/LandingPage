import { FunctionComponent, ReactElement } from "react";
import style from "./main.module.scss";
import chatBotImage from "../../assets/chatBotMainImage.svg";
import BotIcon from "../Bot/BotIcon.tsx";
import StartMessage from "../StartMessage/StartMessage.tsx";
import { useAppSelector } from "../../types/hooks.ts";
import { hide } from "../../store/slices/startMessageSlice.ts";
import { useDispatch } from "react-redux";
import ChatWindow from "../Bot/ChatWindow.tsx";

const Main: FunctionComponent = (): ReactElement => {
    const startMessageVisibility = useAppSelector(
        (state) => state.startMessage.visible,
    );
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(hide());
    }, 5000);

    return (
        <>
            <main className={style.main}>
                <div className={style.main_container}>
                    <div className={style.main_container__info}>
                        <span className={style.info_greetings}>
                            привет, я ваш
                            <br />
                            чат-помощник!
                        </span>
                        <ul className={style.info_ul}>
                            <li className={style.info_li}>
                                Точный расчет заработка
                            </li>
                            <li className={style.info_li}>
                                Информированные решения о карьере
                            </li>
                            <li className={style.info_li}>
                                Мотивация и уверенность
                            </li>
                            <li className={style.info_li}>
                                20% меняют карьеру, 90% понимают свой потенциал
                            </li>
                        </ul>
                    </div>
                    <div className={style.main_image_container}>
                        <img alt={"Картинка Чат Бота"} src={chatBotImage} />
                    </div>
                    <div className={style.startMessage}></div>
                    <div className={style.bot_container}>
                        {startMessageVisibility && <StartMessage />}
                        <div className={style.bot_chatWindow_container}>
                            <ChatWindow />
                        </div>
                        <BotIcon />
                    </div>
                </div>
            </main>
        </>
    );
};
export default Main;
