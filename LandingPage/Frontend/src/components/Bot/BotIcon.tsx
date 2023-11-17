import React, { FunctionComponent, ReactElement } from "react";
import botIcon from "../../assets/message.svg";
import style from "./bot.module.scss";
import { useDispatch } from "react-redux";
import { setOpen } from "../../store/slices/chatBotSlice.ts";
import { hideStartMessage } from "../../store/slices/startMessageSlice.ts";

const BotIcon: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(setOpen());
        dispatch(hideStartMessage());
    };

    return (
        <>
            <button className={style.bot_button} onClick={handleClick}>
                <img alt={"Чат бот"} src={botIcon} className={style.bot_icon} />
            </button>
        </>
    );
};

export default BotIcon;
