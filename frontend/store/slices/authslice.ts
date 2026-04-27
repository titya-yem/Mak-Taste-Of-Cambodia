import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMe } from "../thunk/auth";

export type User = {
    id: string;
    email: string;
    name: string;
    role: string;
}

type AuthState = {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    loading: true,
}

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        setUser (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
        },

        signout (state) {
            state.user = null;
            state.isLoggedIn = false;
            state.loading = false;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(fetchMe.rejected, (state) => {
                state.user = null;
                state.isLoggedIn = false;
                state.loading = false;
            })
    }
})

export const { setUser, signout } = authSlice.actions;
export default authSlice.reducer;