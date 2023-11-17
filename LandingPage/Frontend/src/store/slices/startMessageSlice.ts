import { createSlice } from "@reduxjs/toolkit";
import IStartMessage from "../../types/startMessageTypes.ts";

const initialState: IStartMessage = {
    visible: true,
    title: "Хотите узнать, насколько ценно ваше время? Давайте рассчитаем, сколько вы получаете в час!",
};

const startMessageSlice = createSlice({
    name: "start_message",
    initialState,
    reducers: {
        hide: (state) => {
            state.visible = false;
        },
    },
});

//Экшены
export const { hide } = startMessageSlice.actions;

export default startMessageSlice.reducer;
