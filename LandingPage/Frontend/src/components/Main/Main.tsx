import { FunctionComponent, ReactElement } from "react";
import style from "./main.module.scss"
import Bot from "../Bot/Bot.tsx";
const Main: FunctionComponent = (): ReactElement => {
    return (
        <>
            <main className={style.main}>
                <div className={style.main_container}>
                    <div className={style.main_container__info}>
                        <span className={style.info_greetings}>привет, я ваш<br/>чат-помощник!</span>
                        <ul className={style.info_ul}>
                            <li className={style.info_li}>Точный расчет заработка</li>
                            <li className={style.info_li}>Информированные решения о карьере</li>
                            <li className={style.info_li}>Мотивация и уверенность</li>
                            <li className={style.info_li}>20% меняют карьеру, 90% понимают свой потенциал</li>
                        </ul>
                    </div>
                    <div className={style.main_image_container}></div>
                    <div className={style.bot_container}>
                        <Bot/>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Main;
