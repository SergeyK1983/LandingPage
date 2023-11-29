import { Dispatch, SetStateAction } from "react";

export interface ICardProps {
    img: string;
    name: string;
    job: string;
    description: string;
}

export interface ISliderProps {
    slideIndex: number;
    slidesArr: number[];
}

export interface IDots {
    slidesArr: number[];
    slideIndex: number;
    setSlideIndex: Dispatch<SetStateAction<number>>;
}
