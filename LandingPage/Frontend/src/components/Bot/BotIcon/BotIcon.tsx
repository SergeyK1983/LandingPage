import React, { FunctionComponent, ReactElement } from "react";
import botIcon from "../../../assets/message.svg";
import style from "./botIcon.module.scss";
import { shouldStartMessageShow } from "../../../store/slices/startMessageSlice.ts";
import { setOpen } from "../../../store/slices/chatBotSlice.ts";
import { Link } from "react-router-dom";
import { BotIconProps } from "../../../types/chatBotTypes.ts";
import { useAppDispatch } from "../../../types/hooks.ts";

const BotIcon: FunctionComponent<BotIconProps> = ({
    typeOfDevice,
}): ReactElement => {
    const dispatch = useAppDispatch();

    const handleClick: React.MouseEventHandler = () => {
        dispatch(shouldStartMessageShow());
        dispatch(setOpen());
    };

    return (
        <>
            {typeOfDevice === "desktop" ? (
                <div className={style.bot_button_container}>
                    <button className={style.bot_button} onClick={handleClick}>
                        <img
                            alt={"Чат бот"}
                            src={botIcon}
                            className={style.bot_icon}
                        />
                    </button>
                </div>
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
