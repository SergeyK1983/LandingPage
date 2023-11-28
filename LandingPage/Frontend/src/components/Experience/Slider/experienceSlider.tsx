import { FunctionComponent, ReactElement } from "react";
import style from "./slider.module.scss";
import { usersExperience } from "../../../data/experience.ts";
import Card from "../Cards/Card.tsx";
import { ISliderProps } from "../../../types/cardTypes.ts";
import classNames from "classnames";
const ExperienceSlider: FunctionComponent<ISliderProps> = ({
    slideIndex,
    slidesArr,
}): ReactElement => {
    return (
        <div className={style.window}>
            <div className={style.slides}>
                <div
                    className={
                        slideIndex === slidesArr[0]
                            ? classNames(style.slide, style.slide_active)
                            : style.slide
                    }
                >
                    <Card {...usersExperience[0]} />
                    <Card {...usersExperience[1]} />
                </div>
                <div
                    className={
                        slideIndex === slidesArr[1]
                            ? classNames(style.slide, style.slide_active)
                            : style.slide
                    }
                >
                    <Card {...usersExperience[2]} />
                    <Card {...usersExperience[3]} />
                </div>
                <div
                    className={
                        slideIndex === slidesArr[2]
                            ? classNames(style.slide, style.slide_active)
                            : style.slide
                    }
                >
                    <Card {...usersExperience[4]} />
                    <Card {...usersExperience[5]} />
                </div>
                <div
                    className={
                        slideIndex === slidesArr[3]
                            ? classNames(style.slide, style.slide_active)
                            : style.slide
                    }
                >
                    <Card {...usersExperience[6]} />
                    <Card {...usersExperience[7]} />
                </div>
            </div>
        </div>
    );
};

export default ExperienceSlider;
