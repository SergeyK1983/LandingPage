import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserForm } from "../../types/userForm.ts";

const initialState: IUserForm = {
    userName: "",
    userAge: 0,
    position: "",
    positionAge: 0,
    salary: 0,
    contact: "",
};

const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUserForm>) {
            state.userName = action.payload.userName;
            state.userAge = action.payload.userAge;
            state.position = action.payload.position;
            state.positionAge = action.payload.positionAge;
            state.salary = action.payload.salary;
            state.contact = action.payload.contact;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
