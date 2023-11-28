import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserForm } from "../../types/chatBotTypes.ts";

const initialState: IUserForm = {
    userName: "",
    userAge: 0,
    userProfession: "",
    userExperience: 0,
    userSalary: 0,
    userContact: "",
};

// const fetchUsers = createAsyncThunk("userInfo/fetchUsers", async function () {
//     const responce = fetch("/api/users/", {
//         method: "POST",
//     });
// });

const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUserForm>) {
            state.userName = action.payload.userName;
            state.userAge = action.payload.userAge;
            state.userProfession = action.payload.userProfession;
            state.userExperience = action.payload.userExperience;
            state.userSalary = action.payload.userSalary;
            state.userContact = action.payload.userContact;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
