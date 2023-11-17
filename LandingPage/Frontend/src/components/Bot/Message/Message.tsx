import { FunctionComponent, ReactElement } from "react";
import style from "./message.module.scss";
interface IMessageProps {
    children: ReactElement;
}
const Message: FunctionComponent<IMessageProps> = ({
    children,
}): ReactElement => {
    return (
        <>
            <div className={style.message_container}>{children}</div>
        </>
    );
};

export default Message;
