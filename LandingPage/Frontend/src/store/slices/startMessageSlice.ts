import { createSlice } from "@reduxjs/toolkit";
import IStartMessage from "../../types/startMessageTypes.ts";

const initialState: IStartMessage = {
    visible: false,
    title: "Хотите узнать, насколько ценно ваше время? Давайте рассчитаем, сколько вы получаете в час!",
    shouldStartMessageUp:true,
};

const startMessageSlice = createSlice({
    name: "start_message",
    initialState,
    reducers: {
        toggleStartMessageRender: (state) => {
            state.visible = true;
        },
        shouldStartMessageShow: (state) => {
            state.visible = false;
        },
    },
});

export const { toggleStartMessageRender, shouldStartMessageShow } = startMessageSlice.actions;

export default startMessageSlice.reducer;
