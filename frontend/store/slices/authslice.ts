import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: string;
    email: string;
    name: string;
    role: string;
}

type AuthState = {
    user: User | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
}

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        setUser (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },

        signout (state) {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
})

export const { setUser, signout } = authSlice.actions;
export default authSlice.reducer;