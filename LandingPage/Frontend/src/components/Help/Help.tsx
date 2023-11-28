import { FunctionComponent, ReactElement } from "react";
import style from "./help.module.scss";
import point1 from "../../assets/point1.svg";
import point2 from "../../assets/point2.svg";
import point3 from "../../assets/point3.svg";
import helpPhoto from "../../assets/helpImg.png";

const Help: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.help}>
            <div className={style.help_container}>
                <div className={style.help_container__info}>
                    <span className={style.help_container__title}>
                        мы поможем
                    </span>
                    <div className={style.help_container__infoParag}>
                        <img src={point1} alt={"1"} />
                        <span className={style.help_container__infoText}>
                            Получить ясное представление о вашей финансовой
                            <br />
                            ценности с точным расчетом заработка в час.
                        </span>
                    </div>
                    <div className={style.help_container__infoParag}>
                        <img src={point2} alt={"2"} />
                        <span className={style.help_container__infoText}>
                            Оптимизировать свое время и ресурсы, принимая
                            <br />
                            взвешенные и обдуманные решения на счёт
                            <br /> карьеры.
                        </span>
                    </div>
                    <div className={style.help_container__infoParag}>
                        <img src={point3} alt={"3"} />
                        <span className={style.help_container__infoText}>
                            Найти уверенность в себе и отбросить все сомнения
                            <br />
                            для принятия важного решения.
                        </span>
                    </div>
                </div>
                <div className={style.help_container__photo}>
                    <img src={helpPhoto} alt={"картинка"} />
                </div>
            </div>
        </section>
    );
};

export default Help;
