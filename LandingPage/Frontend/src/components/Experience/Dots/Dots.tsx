import style from "./dots.module.scss";
import { FunctionComponent, ReactElement } from "react";
import { IDots } from "../../../types/cardTypes.ts";
import classNames from "classnames";

const Dots: FunctionComponent<IDots> = ({
    slidesArr,
    slideIndex,
    setSlideIndex,
}): ReactElement => {
    return (
        <>
            <div className={style.dots_container}>
                {slidesArr.map((_, i) => {
                    return (
                        <div
                            className={
                                i === slidesArr[slideIndex]
                                    ? classNames(style.dots, style.dots_active)
                                    : style.dots
                            }
                            onClick={() => setSlideIndex(i)}
                            key={i}
                        ></div>
                    );
                })}
            </div>
        </>
    );
};

export default Dots;
