import style from "./startChatButton.module.scss";
import classNames from "classnames";
import { FunctionComponent, ReactElement } from "react";
import { IStartChatButton } from "../../types/chatBotTypes.ts";

const StartChatButton: FunctionComponent<IStartChatButton> = ({
    className,
}): ReactElement => {
    return (
        <button className={classNames(style.startChatButton, className)}>
            Начать чат
        </button>
    );
};

export default StartChatButton;
