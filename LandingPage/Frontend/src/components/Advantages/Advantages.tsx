import style from "./advantages.module.scss";
import firstImage from "../../assets/advantages_img_1.png";
import secondImage from "../../assets/advantages_img_2.png";
import thirdImage from "../../assets/advantages_img_3.png";
import { FunctionComponent, ReactElement } from "react";
const Advantages: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.advantages}>
            <div className={style.advantages_container}>
                <div className={style.advantages_title__container}>
                    <span className={style.advantages_title}>
                        главные приемущества
                    </span>
                </div>
                <div className={style.advantages_examples_container}>
                    <div className={style.advantages_examples}>
                        <img
                            alt={"картинка"}
                            src={firstImage}
                            className={style.advantages_images}
                        />
                        <span className={style.advantages_examples__titles}>
                            Наш чат-бот предоставляет вам точный расчет вашего
                            заработка в час, помогая ясно оценить вашу
                            финансовую ценность. Это позволяет принимать более
                            обоснованные решения в сфере карьеры и финансов,
                            обеспечивая ясное представление о вашем реальном
                            вкладе.
                        </span>
                    </div>
                    <div className={style.advantages_examples}>
                        <img
                            alt={"картинка"}
                            src={secondImage}
                            className={style.advantages_images}
                        />
                        <span className={style.advantages_examples__titles}>
                            Наши расчеты служат источником мотивации,
                            поддерживая вас в стремлении к финансовому успеху.
                            Статистика показывает, что 20% пользователей, узнав
                            свою реальную стоимость, принимают решение сменить
                            карьеру, подчеркивая влияние нашего чат-бота на
                            мотивацию.
                        </span>
                    </div>
                    <div className={style.advantages_examples}>
                        <img
                            alt={"картинка"}
                            src={thirdImage}
                            className={style.advantages_images}
                        />
                        <span className={style.advantages_examples__titles}>
                            Зная, сколько вы стоите в час, вы получаете основу
                            для принятия информированных решений о своей
                            карьере. Это не только оптимизирует ваше время, но и
                            помогает эффективнее распределять ресурсы, сделав
                            ваш финансовый статус более ясным.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
