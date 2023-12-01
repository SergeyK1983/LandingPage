import style from "./startMessage.module.scss";
import { RootState } from "../../../types/storeTypes.ts";
import { useAppSelector } from "../../../types/hooks.ts";
import { FunctionComponent, ReactElement } from "react";

const StartMessage: FunctionComponent = (): ReactElement => {
    const message = useAppSelector(
        (state: RootState) => state.startMessage.title,
    );

    const chatOpen = useAppSelector((state) => state.chatBot.open);

    return (
        <>
            {!chatOpen && (
                <div
                    className={style.startMessage_container}
                    id={"start_message"}
                >
                    <div className={style.startMessage_position}>
                        <span className={style.startMessage_title}>
                            {message}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default StartMessage;
