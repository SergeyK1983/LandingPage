import {FunctionComponent, ReactElement} from "react";
import bot from "../../assets/Bot.svg"
import style from "./bot.module.scss"

const Bot: FunctionComponent = (): ReactElement => {
    return (
        <>
            <button className={style.bot_button}>
                <img alt={"Чат бот"} src={bot} className={style.bot_icon}/>
            </button>
        </>
    )
}

export default Bot