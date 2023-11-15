import { FunctionComponent, ReactElement } from "react";
import styles from "./bot.module.scss";
import quit from "../../assets/quitChat.svg";
import Message from "./Message/Message.tsx";
import sendMessageIcon from "../../assets/sendMessage.svg";
import UserForm from "./Form/UserForm.tsx";

const ChatWindow: FunctionComponent = (): ReactElement => {
    return (
        <>
            <div className={styles.chatWindow}>
                <div className={styles.chatWindow_title__container}>
                    <span className={styles.chatWindow_title}>
                        Чат-помощник
                    </span>
                    <img
                        src={quit}
                        alt={"Закрыть чат"}
                        className={styles.chatWindow_quit}
                    />
                </div>
                <div className={styles.chatWindow_messages_container}>
                    <Message>
                        <span className={styles.chatWindow_message__text}>
                            Привет! Я помогу вам, но для этого мне понадобится
                            немного информации от вас.
                        </span>
                    </Message>
                    <Message>
                        <UserForm />
                    </Message>
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
