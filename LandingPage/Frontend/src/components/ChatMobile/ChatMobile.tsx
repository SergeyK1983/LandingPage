import style from "./chatMobile.module.scss";
import ChatWindow from "../Bot/ChatWindow/ChatWindow.tsx";
import { useAppSelector } from "../../types/hooks.ts";

const ChatMobile = () => {
    const chatOpen = useAppSelector((state) => state.chatBot.open);

    return (
        <>
            <div className={style.chatMobile}>
                {chatOpen && (
                    <ChatWindow chatOpen={chatOpen} typeOfDevice={"mobile"} />
                )}
            </div>
        </>
    );
};

export default ChatMobile;
