import React, { FunctionComponent, ReactElement } from "react";
import style from "./form.module.scss";

const UserForm: FunctionComponent = (): ReactElement => {
    const handleClickButton: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        event.preventDefault();
    };

    return (
        <>
            <form className={style.form_container}>
                <div className={style.form_block}>
                    <label className={style.label_text}>Как вас зовут</label>
                    <input
                        placeholder={"ФИО"}
                        className={style.medium_input}
                        type={"text"}
                    />
                </div>
                <div className={style.form_block__small}>
                    <label className={style.label_text}>Сколько вам лет</label>
                    <input
                        placeholder={"Лет"}
                        className={style.small_input}
                        type={"number"}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>Кем вы работаете</label>
                    <input
                        placeholder={"Должность"}
                        className={style.medium_input}
                        type={"text"}
                    />
                </div>
                <div className={style.form_block__small}>
                    <label className={style.label_text}>Как давно</label>
                    <input
                        placeholder={"Стаж"}
                        className={style.small_input}
                        type={"number"}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>
                        Сколько вы получаете в месяц
                    </label>
                    <input
                        placeholder={"Заработная плата"}
                        className={style.large_input}
                        type={"number"}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>
                        Телефон или телеграмм
                    </label>
                    <input
                        placeholder={"+7 или @"}
                        className={style.large_input}
                        type={"tel"}
                    />
                </div>
                <span className={style.confidence_text}>
                    Нажимая на кнопку «Отправить», вы соглашаетесь c Политикой
                    обработки персональных данных.
                </span>
                <button
                    className={style.form_button}
                    onClick={handleClickButton}
                >
                    Отправить
                </button>
            </form>
        </>
    );
};

export default UserForm;
