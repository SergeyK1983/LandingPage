import { ReactElement } from "react";

export interface IChatBot {
    open: boolean;
    firstMessage: boolean;
    secondMessage: boolean;
    thirdMessage: boolean;
}

export interface ChatWindowProps {
    chatOpen: boolean;
    typeOfDevice: "mobile" | "desktop" | "tablet";
}

export interface BotIconProps {
    typeOfDevice: "mobile" | "desktop" | "tablet";
}

export interface IMessageProps {
    children: ReactElement;
    src?: string;
    linkImage?: string;
    linkSrc?: string;
    linkService?: string;
    linkDescription?: string;
}

export interface IUserForm {
    userName: string;
    userAge: number;
    userProfession: string;
    userExperience: number;
    userSalary: number;
    userContact: string;
}
