import { FunctionComponent, ReactElement } from "react";
import botIcon from "../../assets/message.svg";
import style from "./bot.module.scss";

const BotIcon: FunctionComponent = (): ReactElement => {
    return (
        <>
            <button className={style.bot_button}>
                <img alt={"Чат бот"} src={botIcon} className={style.bot_icon} />
            </button>
        </>
    );
};

export default BotIcon;
