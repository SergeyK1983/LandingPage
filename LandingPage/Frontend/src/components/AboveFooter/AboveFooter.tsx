import { FunctionComponent, ReactElement } from "react";
import style from "./aboveFooter.module.scss";
import question from "../../assets/aboveFooter_question.png";
import chat from "../../assets/aboveFooter_chat.png";
import crystal1 from "../../assets/aboveFooter_cristal.png";
import crystal2 from "../../assets/aboveFooter_cristal2.png";

const AboveFooter: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.aboveFooter}>
            <div className={style.aboveFooter_image0__container0}>
                <img
                    className={style.aboveFooter_image0}
                    src={question}
                    alt={"картинка вопросика"}
                />
            </div>
            <div className={style.aboveFooter_image1__container1}>
                <img
                    src={chat}
                    alt={"картинка чата"}
                    className={style.aboveFooter_image1}
                />
            </div>
            <div className={style.aboveFooter_image2__container2}>
                <img
                    src={crystal1}
                    alt={"картинка кристалла1"}
                    className={style.aboveFooter_image2}
                />
            </div>
            <div className={style.aboveFooter_image3__container3}>
                <img
                    src={crystal2}
                    alt={"картинка кристалла2"}
                    className={style.aboveFooter_image3}
                />
            </div>
            <div className={style.aboveFooter__container}>
                <span className={style.aboveFooter_text}>
                    Не упусти возможность присоедениться к тысячам
                    <br />
                    пользователей, которые уже узнали как увеличить свой доход!
                </span>
            </div>
        </section>
    );
};

export default AboveFooter;
