import { createSlice } from "@reduxjs/toolkit";
import { IBurgerMenu } from "../../types/burgerMenuTypes.ts";

const initialState: IBurgerMenu = {
    openBurger: false,
    openServices: false,
};

const burgerSlice = createSlice({
    name: "burger",
    initialState,
    reducers: {
        toggleBurger(state) {
            state.openBurger = !state.openBurger;
        },
        toggleServices(state) {
            state.openServices = !state.openServices;
        },
    },
});

export const { toggleBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
