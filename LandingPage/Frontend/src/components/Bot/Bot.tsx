import style from "./bot.module.scss";
import StartMessage from "./StartMessage/StartMessage.tsx";
import ChatWindow from "./ChatWindow/ChatWindow.tsx";
import BotIcon from "./BotIcon/BotIcon.tsx";
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import { useEffect } from "react";
import { toggleStartMessageRender } from "../../store/slices/startMessageSlice.ts";

const Bot = () => {
    const dispatch = useAppDispatch();

    const startMessageVisible = useAppSelector(
        (state) => state.startMessage.visible,
    );

    const chatOpen = useAppSelector((state) => state.chatBot.open);

    useEffect(() => {
        if (startMessageVisible) return;

        const timer = setTimeout(() => {
            dispatch(toggleStartMessageRender());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={style.bot}>
                <div className={style.startMessage_container}>
                    {startMessageVisible && <StartMessage />}
                </div>
                <div className={style.chatWindow_container}>
                    {chatOpen && (
                        <ChatWindow
                            typeOfDevice={"desktop"}
                            chatOpen={chatOpen}
                        />
                    )}
                </div>
                <div className={style.botIcon_container_desktop}>
                    <BotIcon typeOfDevice={"desktop"} />
                </div>
                <div className={style.botIcon_container_mobile}>
                    <BotIcon typeOfDevice={"mobile"} />
                </div>
            </div>
        </>
    );
};

export default Bot;
