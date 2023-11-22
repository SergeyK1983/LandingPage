import burgerIcon from "../../assets/mobileBurgerMenuIcon.svg"
import style from "./burger.module.scss";
import {useDispatch} from "react-redux";
import {openMenu} from "../../store/slices/burgerMenuSlice.ts";

const BurgerMenuIcon = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(openMenu())
    }

    return (
        <button className={style.burger_button} onClick={handleClick}>
            <img src={burgerIcon} alt={"меню"} className={style.burger_img}/>
        </button>
    );
};

export default BurgerMenuIcon;