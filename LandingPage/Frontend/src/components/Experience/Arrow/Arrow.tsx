import React, { FunctionComponent, ReactElement } from "react";
import style from "./arrow.module.scss";
import classNames from "classnames";

interface Arrow {
    alt: string;
    src: string;
    classNamePosition: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Arrow: FunctionComponent<Arrow> = ({
    alt,
    src,
    classNamePosition,
    onClick,
}): ReactElement => {
    return (
        <div
            className={classNames(style.arrow_position, classNamePosition)}
            onClick={onClick}
        >
            <img alt={alt} src={src} className={classNames(style.arrow_img)} />
        </div>
    );
};

export default Arrow;
