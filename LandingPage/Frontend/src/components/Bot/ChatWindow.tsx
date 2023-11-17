import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useRef,
} from "react";
import styles from "./bot.module.scss";
import quit from "../../assets/quitChat.svg";
import Message from "./Message/Message.tsx";
import sendMessageIcon from "../../assets/sendMessage.svg";
import UserForm from "./Form/UserForm.tsx";
import ResultImage from "../../assets/ResultImage.svg";
import { Link } from "react-router-dom";
import linkImage from "../../assets/linkImage.svg";
import { useDispatch } from "react-redux";
import {
    sendFirstMessage,
    sendThirdMessage,
    setOpen,
} from "../../store/slices/chatBotSlice.ts";
import { useAppSelector } from "../../types/hooks.ts";

interface ChatWindowProps {
    chatOpen: boolean;
}

const ChatWindow: FunctionComponent<ChatWindowProps> = ({
    chatOpen,
}): ReactElement => {
    const dispatch = useDispatch();
    const chatWindowRef = useRef<HTMLDivElement>(null);

    const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
        dispatch(setOpen());
    };

    const formMessage = useAppSelector((state) => state.chatBot.firstMessage);

    setTimeout(() => {
        dispatch(sendFirstMessage());
    }, 2000);

    const resultMessage = useAppSelector(
        (state) => state.chatBot.secondMessage,
    );

    const consultationMessage = useAppSelector(
        (state) => state.chatBot.thirdMessage,
    );

    if (resultMessage === true) {
        setTimeout(() => {
            dispatch(sendThirdMessage());
        }, 2000);
    }

    useEffect(() => {
        chatWindowRef.current!.scrollTop = chatWindowRef.current!.scrollHeight;
    }, [formMessage, resultMessage, consultationMessage]);

    return (
        <>
            <div className={styles.chatWindow}>
                <div className={styles.chatWindow_title__container}>
                    <span className={styles.chatWindow_title}>
                        Чат-помощник
                    </span>
                    <img
                        onClick={handleClick}
                        src={quit}
                        alt={"Закрыть чат"}
                        className={styles.chatWindow_quit}
                    />
                </div>
                <div
                    className={styles.chatWindow_messages_container}
                    ref={chatWindowRef}
                >
                    {chatOpen && (
                        <Message>
                            <span className={styles.chatWindow_message__text}>
                                Привет! Я помогу вам, но для этого мне
                                понадобится немного информации от вас.
                            </span>
                        </Message>
                    )}
                    {formMessage && (
                        <Message>
                            <UserForm />
                        </Message>
                    )}
                    {resultMessage && (
                        <Message src={ResultImage}>
                            <span className={styles.chatWindow_message__text}>
                                Ваш час стоит <strong>{398}</strong> рублей.
                                <br /> С таким опытом, вы можете рассчитывать на
                                более высокий уровень дохода
                            </span>
                        </Message>
                    )}
                    {consultationMessage && (
                        <Message
                            linkImage={linkImage}
                            linkSrc={"https://dezorientaciya.ru/"}
                            linkService={"Карьерная консультация"}
                            linkDescription={"Поможем оценить рынок труда"}
                        >
                            <span className={styles.chatWindow_message__text}>
                                Я кое-что нашел для вас! Это поможет разобраться
                                как увеличить ваш доход.
                                <br />
                                <Link
                                    to={"https://dezorientaciya.ru/"}
                                    className={styles.chatWindow_message__Link}
                                >
                                    Ссылка на страницу о карьерной консультации
                                </Link>
                            </span>
                        </Message>
                    )}
                </div>
                <div className={styles.chatWindow_bottomInput_container}>
                    <input
                        placeholder={"Задать вопрос..."}
                        type={"text"}
                        className={styles.chatWindow_bottomInput_input}
                    />
                    <img
                        src={sendMessageIcon}
                        alt={"Отправить сообщение"}
                        className={styles.chatWindow_bottomInput_send}
                    />
                </div>
            </div>
        </>
    );
};

export default ChatWindow;
