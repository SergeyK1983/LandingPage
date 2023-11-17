import { configureStore } from "@reduxjs/toolkit";
import startMessageReducer from "./slices/startMessageSlice.ts";
import chatBotReducer from "./slices/chatBotSlice.ts";
import userReducer from "./slices/userSlice.ts";

const store = configureStore({
    reducer: {
        startMessage: startMessageReducer,
        chatBot: chatBotReducer,
        userInfo: userReducer,
    },
});

export default store;
