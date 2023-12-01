import { FunctionComponent, ReactElement } from "react";
import style from "./main.module.scss";
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";
import Advantages from "../Advantages/Advantages.tsx";
import Experience from "../Experience/Experience.tsx";
import Road from "../Road/Road.tsx";
import Help from "../Help/Help.tsx";
import Call from "../Call/Call.tsx";
import AboveFooter from "../AboveFooter/AboveFooter.tsx";
import Bot from "../Bot/Bot.tsx";
import Greetings from "../Greetings/Greetings.tsx";

const Main: FunctionComponent = (): ReactElement => {
    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.blocks}>
                    <div className={style.bot}>
                        <Bot />
                    </div>
                    <Greetings />

                    <Advantages />

                    <Experience />

                    <Road />

                    <Help />

                    <Call />

                    <AboveFooter />
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Main;
