import { FunctionComponent, ReactElement } from "react";
import style from "./footer.module.scss";
import mailIcon from "../../assets/mail.svg";
import telegramIcon from "../../assets/telegram.svg";
import yandexZen from "../../assets/yandexZen.svg";
import {Link} from "react-router-dom";

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footer_container}>
                    <div className={style.footer_container__info}>
                        <div>
                            <Link to={"mailto:support@dezorientaciya.ru"} className={style.link_mail}>
                                <img src={mailIcon} alt={"mail icon"}/>
                                <span className={style.link_mail__span}>support@dezorientaciya.ru</span>
                            </Link>
                        </div>
                        <div className={style.container_image_links}>
                            <Link to={"https://t.me/dezorientaciya"} className={style.link_img}><img src={telegramIcon} alt={"Наш telegram"}/></Link>
                            <Link to={"https://dzen.ru/dezorientaciyaru"} className={style.link_img}><img src={yandexZen} alt={"Наш Яндекс Дзен"}/></Link>
                        </div>
                        <div className={style.container_conf}>
                            <Link to={"/"} className={style.link_conf}>Политика конфиденциальности</Link>
                        </div>
                    </div>
                    <div className={style.footer_container__about}>
                        <Link to={"https://dezorientaciya.ru/services/"} className={style.link_about}>Услуги</Link>
                        <Link to={"https://dezorientaciya.ru/blog/"} className={style.link_about}>Блог</Link>
                        <Link to={"https://dezorientaciya.ru/#otz"} className={style.link_about}>Отзывы</Link>
                        <Link to={"https://dezorientaciya.ru/buisnes/"} className={style.link_about}>Подбор персонала</Link>
                    </div>
                    <div className={style.footer_container__career}>
                        <Link to={"https://dezorientaciya.ru/carier/"} className={style.link_about}>Карьера с нами</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
