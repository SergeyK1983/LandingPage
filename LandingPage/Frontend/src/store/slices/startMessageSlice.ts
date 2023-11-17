import { createSlice } from "@reduxjs/toolkit";
import IStartMessage from "../../types/startMessageTypes.ts";

const initialState: IStartMessage = {
    visible: false,
    title: "Хотите узнать, насколько ценно ваше время? Давайте рассчитаем, сколько вы получаете в час!",
};

const startMessageSlice = createSlice({
    name: "start_message",
    initialState,
    reducers: {
        hideStartMessage: (state) => {
            state.visible = false;
        },
        showStartMessage: (state) => {
            state.visible = true;
        },
    },
});

export const { hideStartMessage, showStartMessage } = startMessageSlice.actions;

export default startMessageSlice.reducer;
