import style from "./card.module.scss";
import { FunctionComponent, ReactElement } from "react";
import { ICardProps } from "../../../types/cardTypes.ts";

const Card: FunctionComponent<ICardProps> = ({
    img,
    name,
    job,
    description,
}): ReactElement => {
    return (
        <div className={style.card}>
            <div className={style.card_container}>
                <div className={style.card_humanInfo_container}>
                    <img src={img} alt={"человек"} className={style.card_img} />
                    <div className={style.card_humanInfo}>
                        <span className={style.card_humanName}>{name}</span>
                        <div className={style.card_humanJob}>{job}</div>
                    </div>
                </div>
                <div>
                    <span className={style.card_humanDescription}>
                        {description}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
