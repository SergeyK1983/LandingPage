import { FunctionComponent, ReactElement } from "react";
import style from "./form.module.scss";
import { setUser } from "../../../store/slices/userSlice.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import { sendSecondMessage } from "../../../store/slices/chatBotSlice.ts";
import { useAppDispatch, useAppSelector } from "../../../types/hooks.ts";
import { IUserForm } from "../../../types/chatBotTypes.ts";

const UserForm: FunctionComponent = (): ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IUserForm>({
        mode: "onBlur",
    });
    const dispatch = useAppDispatch();

    const formInfo = useAppSelector((state) => state.userInfo);

    const onSubmit: SubmitHandler<IUserForm> = async (data) => {
        console.log(JSON.stringify(data))
        dispatch(
            setUser({
                userName: data.userName,
                userAge: data.userAge,
                userProfession: data.userProfession,
                userExperience: data.userExperience,
                userSalary: data.userSalary,
                userContact: data.userContact,
            } as IUserForm),
        );

        await fetch("http://127.0.0.1:8000/api/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify(data),
        });

        reset();

        dispatch(sendSecondMessage());
    };

    return (
        <>
            <form
                className={style.form_container}
                name={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={style.form_block}>
                    <label className={style.label_text}>Как вас зовут</label>
                    <input
                        placeholder={"ФИО"}
                        className={classNames(style.medium_input, {
                            [style.errorInput]: errors.userName,
                        })}
                        {...register("userName", {
                            required: true,
                            minLength: 2,
                        })}
                    />
                </div>
                <div className={style.form_block__small}>
                    <label className={style.label_text}>Сколько вам лет</label>
                    <input
                        placeholder={"Лет"}
                        className={classNames(style.small_input, {
                            [style.errorInput]: errors.userAge,
                        })}
                        type={"number"}
                        {...register("userAge", {
                            required: true,
                            minLength: 2,
                            valueAsNumber: true,
                        })}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>Кем вы работаете</label>
                    <input
                        placeholder={"Должность"}
                        className={classNames(style.medium_input, {
                            [style.errorInput]: errors.userProfession,
                        })}
                        type={"text"}
                        {...register("userProfession", {
                            required: true,
                            minLength: 2,
                        })}
                    />
                </div>
                <div className={style.form_block__small}>
                    <label className={style.label_text}>Как давно</label>
                    <input
                        placeholder={"Стаж"}
                        className={classNames(style.small_input, {
                            [style.errorInput]: errors.userExperience,
                        })}
                        type={"number"}
                        {...register("userExperience", {
                            required: true,
                            minLength: 1,
                            valueAsNumber: true,
                        })}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>
                        Сколько вы получаете в месяц
                    </label>
                    <input
                        placeholder={"Заработная плата"}
                        className={classNames(style.large_input, {
                            [style.errorInput]: errors.userSalary,
                        })}
                        type={"number"}
                        {...register("userSalary", {
                            required: true,
                            minLength: 1,
                            valueAsNumber: true,
                        })}
                    />
                </div>
                <div className={style.form_block}>
                    <label className={style.label_text}>
                        Телефон или телеграмм
                    </label>
                    <input
                        placeholder={"+7 или @"}
                        className={classNames(style.large_input, {
                            [style.errorInput]: errors.userContact,
                        })}
                        type={"tel"}
                        {...register("userContact", {
                            required: true,
                            minLength: 2,
                        })}
                    />
                </div>
                <span className={style.confidence_text}>
                    Нажимая на кнопку «Отправить», вы соглашаетесь c Политикой
                    обработки персональных данных.
                </span>
                <input
                    value={"Отправить"}
                    className={classNames(style.form_button, {
                        [style.form_buttonActive]: isValid,
                    })}
                    type={"submit"}
                    disabled={!isValid}
                />
            </form>
        </>
    );
};

export default UserForm;
