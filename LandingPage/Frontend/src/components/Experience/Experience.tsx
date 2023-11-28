import style from "./experience.module.scss";
import React, { FunctionComponent, ReactElement, useState } from "react";
import leftArrow from "../../assets/leftArrow.svg";
import Arrow from "./Arrow/Arrow.tsx";
import rightArrow from "../../assets/rightArrow.svg";
import ExperienceSlider from "./Slider/experienceSlider.tsx";
import Dots from "./Dots/Dots.tsx";

const Experience: FunctionComponent = (): ReactElement => {
    const slidesArr = [0, 1, 2, 3];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleLeftArrowClick: React.MouseEventHandler<
        HTMLDivElement
    > = () => {
        if (slidesArr[currentSlide] === 0) {
            setCurrentSlide(3);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleRightArrowClick: React.MouseEventHandler<
        HTMLDivElement
    > = () => {
        if (slidesArr[currentSlide] !== 3) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    return (
        <section className={style.experience}>
            <div className={style.experience_container}>
                <div>
                    <span className={style.experience_title}>ваш опыт</span>
                </div>
                <div className={style.experience_slider__container}>
                    <Arrow
                        alt={"стрелка влево"}
                        src={leftArrow}
                        classNamePosition={style.experience_slider__leftArrow}
                        onClick={handleLeftArrowClick}
                    />
                    <ExperienceSlider
                        slideIndex={currentSlide}
                        slidesArr={slidesArr}
                    />
                    <Arrow
                        alt={"стрелка вправо"}
                        src={rightArrow}
                        classNamePosition={style.experience_slider__rightArrow}
                        onClick={handleRightArrowClick}
                    />
                </div>
                <Dots
                    slidesArr={slidesArr}
                    slideIndex={currentSlide}
                    setSlideIndex={setCurrentSlide}
                />
            </div>
        </section>
    );
};

export default Experience;
