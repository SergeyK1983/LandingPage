import React, { FunctionComponent, ReactElement } from "react";
import botIcon from "../../assets/message.svg";
import style from "./bot.module.scss";
import { useDispatch } from "react-redux";
import { shouldStartMessageShow } from "../../store/slices/startMessageSlice.ts";
import { setOpen } from "../../store/slices/chatBotSlice.ts";
import { Link } from "react-router-dom";

export interface BotIconProps {
    typeOfDevice: "mobile" | "desktop" | "tablet";
}

const BotIcon: FunctionComponent<BotIconProps> = ({
    typeOfDevice,
}): ReactElement => {
    const dispatch = useDispatch();

    const handleClick: React.MouseEventHandler = () => {
        dispatch(shouldStartMessageShow());
        dispatch(setOpen());
    };

    return (
        <>
            {typeOfDevice === "desktop" ? (
                <button className={style.bot_button} onClick={handleClick}>
                    <img
                        alt={"Чат бот"}
                        src={botIcon}
                        className={style.bot_icon}
                    />
                </button>
            ) : (
                <button className={style.bot_button} onClick={handleClick}>
                    <Link to={"/chatMobile"}>
                        <img
                            alt={"Чат бот"}
                            src={botIcon}
                            className={style.bot_icon}
                        />
                    </Link>
                </button>
            )}
        </>
    );
};

export default BotIcon;
