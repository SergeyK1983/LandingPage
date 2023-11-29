import { FunctionComponent, ReactElement } from "react";
import style from "./call.module.scss";

const Call: FunctionComponent = (): ReactElement => {
    return (
        <section className={style.call}>
            <div className={style.call_container}>
                <div className={style.call_info__container}>
                    <span className={style.call_info__title}>
                        Остались вопросы
                    </span>
                    <span className={style.call_info__text}>
                        Оставьте заявку и мы свяжемся с вами в<br /> течение 30
                        минут
                    </span>
                </div>
                <div className={style.call_form__container}>
                    <form className={style.call_form}>
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Как вас зовут
                            </label>
                            <input
                                type={"text"}
                                className={style.call_form__input}
                                placeholder={"Имя и фамилия"}
                            />
                        </div>
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Телефон или телеграм
                            </label>
                            <input
                                type={"text"}
                                className={style.call_form__input}
                                placeholder={"+7 или @"}
                            />
                        </div>
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Ваш запрос
                            </label>
                            <textarea className={style.call_form__textarea} />
                        </div>
                        <div className={style.call_form_confidence__container}>
                            <span className={style.call_form__confidenceText}>
                                Нажимая на кнопку «Оставить заявку», вы
                                соглашаетесь c политикой обработки персональных
                                данных.
                            </span>
                        </div>
                        <div className={style.call_form_submitButton_container}>
                            <input
                                type={"submit"}
                                value={"Оставить заявку"}
                                className={style.call_form_submitButton}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Call;
