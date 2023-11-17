import { FunctionComponent, ReactElement } from "react";
import style from "./message.module.scss";
import { Link } from "react-router-dom";
interface IMessageProps {
    children: ReactElement;
    src?: string;
    linkImage?: string;
    linkSrc?: string;
    linkService?: string;
    linkDescription?: string;
}
const Message: FunctionComponent<IMessageProps> = ({
    children,
    src,
    linkImage,
    linkSrc,
    linkService,
    linkDescription,
}): ReactElement => {
    return (
        <>
            <div className={style.message_container}>
                {!!src && (
                    <img
                        alt={"Картинка"}
                        src={src}
                        className={style.message_image}
                    />
                )}
                <div
                    className={
                        !!src ? style.message_text__withImg : style.message_text
                    }
                >
                    {children}
                    {linkImage && (
                        <div className={style.message_linkImage_container}>
                            <img src={linkImage} alt={"Картинка"} />
                            <div
                                className={style.message_linkImage_description}
                            >
                                <Link
                                    to={"https://dezorientaciya.ru/"}
                                    className={style.message_linkImage_link}
                                >
                                    {linkSrc}
                                </Link>
                                <span
                                    className={
                                        style.message_linkImage_text_strong
                                    }
                                >
                                    {linkService}
                                </span>
                                <span className={style.message_linkImage_text}>
                                    {linkDescription}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Message;
