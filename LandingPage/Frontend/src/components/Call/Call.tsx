import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import style from "./call.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICallForm } from "../../types/CallFormTypes.ts";
import { api } from "../../api/api.ts";
import classNames from "classnames";

const Call: FunctionComponent = (): ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<ICallForm>({ mode: "onBlur" });

    const onSubmit: SubmitHandler<ICallForm> = async (data) => {
        await api
            .post("api/visitormessage/", {
                json: data,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .json();

        reset();
    };

    const handleClickSubmitInput: MouseEventHandler<HTMLInputElement> = (
        event,
    ) => {
        event.currentTarget.classList.add(".click");
    };

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
                    <form
                        className={style.call_form}
                        name={"callForm"}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Как вас зовут
                            </label>
                            <input
                                type={"text"}
                                className={classNames(style.call_form__input, {
                                    [style.call_form__errorInput]:
                                        errors.callUserName,
                                })}
                                placeholder={"Имя и фамилия"}
                                {...register("callUserName", {
                                    required: true,
                                    minLength: 2,
                                })}
                            />
                        </div>
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Телефон или телеграм
                            </label>
                            <input
                                type={"text"}
                                className={classNames(style.call_form__input, {
                                    [style.call_form__errorInput]:
                                        errors.callUserContact,
                                })}
                                placeholder={"+7 или @"}
                                {...register("callUserContact", {
                                    required: true,
                                    minLength: 2,
                                })}
                            />
                        </div>
                        <div className={style.call_form__inputLabel}>
                            <label className={style.call_form__label_text}>
                                Ваш запрос
                            </label>
                            <textarea
                                className={style.call_form__textarea}
                                {...register("callUserQuestion", {
                                    required: false,
                                })}
                            />
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
                                onClick={handleClickSubmitInput}
                                className={classNames(
                                    style.call_form_submitButton,
                                    {
                                        [style.call_form_submitButtonActive]:
                                            isValid,
                                    },
                                )}
                                disabled={!isValid}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Call;
