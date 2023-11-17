import { createSlice } from "@reduxjs/toolkit";
import { IChatBot } from "../../types/chatBotTypes.ts";

const initialState: IChatBot = {
    open: false,
    firstMessage: false,
    secondMessage: false,
    thirdMessage: false,
};

const chatBotSlice = createSlice({
    name: "chat_bot",
    initialState,
    reducers: {
        setOpen(state) {
            state.open = !state.open;
        },
        sendFirstMessage(state) {
            state.firstMessage = true;
        },
        sendSecondMessage(state) {
            state.secondMessage = true;
        },
        sendThirdMessage(state) {
            state.thirdMessage = true;
        },
    },
});

export const {
    setOpen,
    sendFirstMessage,
    sendSecondMessage,
    sendThirdMessage,
} = chatBotSlice.actions;

export default chatBotSlice.reducer;
