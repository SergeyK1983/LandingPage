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
        openMenu(state) {
            state.openBurger = !state.openBurger;
        },
        openServices(state) {
            state.openServices = !state.openServices;
        },
    },
});

export const { openMenu, openServices } = burgerSlice.actions;

export default burgerSlice.reducer;
