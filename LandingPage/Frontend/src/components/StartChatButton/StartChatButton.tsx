import style from "./startChatButton.module.scss";
import classNames from "classnames";
import React, { FunctionComponent, ReactElement } from "react";
import { IStartChatButton } from "../../types/chatBotTypes.ts";
import { useAppDispatch } from "../../types/hooks.ts";
import { shouldStartMessageShow } from "../../store/slices/startMessageSlice.ts";
import { setOpen } from "../../store/slices/chatBotSlice.ts";

const StartChatButton: FunctionComponent<IStartChatButton> = ({
    className,
}): ReactElement => {
    const dispatch = useAppDispatch();

    const handleClick: React.MouseEventHandler = () => {
        dispatch(shouldStartMessageShow());
        dispatch(setOpen());
        window.location.href = "#header";
    };

    return (
        <button
            className={classNames(style.startChatButton, className)}
            onClick={handleClick}
        >
            Начать чат
        </button>
    );
};

export default StartChatButton;
