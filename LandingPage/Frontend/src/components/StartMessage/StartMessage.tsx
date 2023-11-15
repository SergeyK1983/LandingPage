import style from "./startMessage.module.scss";
import { RootState } from "../../types/storeTypes.ts";
import { useAppSelector } from "../../types/hooks.ts";

const StartMessage = () => {
    const message = useAppSelector(
        (state: RootState) => state.startMessage.title,
    );

    return (
        <>
            <div className={style.startMessage_container} id={"start_message"}>
                <div className={style.startMessage_position}>
                    <span className={style.startMessage_title}>{message}</span>
                </div>
            </div>
        </>
    );
};

export default StartMessage;
