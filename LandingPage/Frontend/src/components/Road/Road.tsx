import { FunctionComponent, ReactElement } from "react";
import style from "./road.module.scss";
import goal from "../../assets/goal.svg";
import classNames from "classnames";
import vector1 from "../../assets/vector1.svg";
import vector2 from "../../assets/vector2.svg";
import vector3 from "../../assets/vector3.svg";
import splash from "../../assets/splash.svg";
import StartChatButton from "../StartChatButton/StartChatButton.tsx";

const Road: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.road}>
            <div className={style.vector1}>
                <img src={vector1} alt={"путь1"} />
            </div>
            <div className={style.vector2}>
                <img src={vector2} alt={"путь2"} />
            </div>
            <div className={style.vector3}>
                <img src={vector3} alt={"путь3"} />
            </div>
            <div
                className={classNames(
                    style.road_goal_container,
                    style.goal_position_1,
                )}
            >
                <img src={goal} alt={"гол"} className={style.img_goal} />
                <span className={style.road_text}>
                    Хотите сменить текущую
                    <br />
                    профессию
                </span>
            </div>
            <div
                className={classNames(
                    style.road_goal_container,
                    style.goal_position_2,
                )}
            >
                <img src={goal} alt={"гол"} className={style.img_goal} />
                <span className={style.road_text}>
                    Много сомнений и<br />
                    неуверенности в себе
                </span>
            </div>
            <div
                className={classNames(
                    style.road_goal_container,
                    style.goal_position_3,
                )}
            >
                <img src={goal} alt={"гол"} className={style.img_goal} />
                <span className={style.road_text}>
                    Не достаточно информации для
                    <br />
                    оценки своей финансовой
                    <br />
                    ценности
                </span>
            </div>
            <div
                className={classNames(
                    style.road_goal_container,
                    style.goal_position_4,
                )}
            >
                <img
                    src={goal}
                    alt={"гол"}
                    className={classNames(style.img_goal, style.img_goal4)}
                />
                <span className={classNames(style.road_text, style.road_text4)}>
                    Давайте рассчитаем,
                    <br /> сколько вы получаете в час!
                </span>
            </div>
            <div className={style.goal_button}>
                <StartChatButton className={style.start_chatRotate} />
                <img src={splash} alt={"иконка"} />
            </div>
        </section>
    );
};

export default Road;
