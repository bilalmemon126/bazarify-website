import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, otpVerification, registerUser } from "./userAction";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("userId", action.payload.data._id)
                localStorage.setItem("firstName", action.payload.data.firstName)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(otpVerification.pending, (state) => {
                state.loading = true;
            })
            .addCase(otpVerification.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("userId", action.payload.data._id)
                localStorage.setItem("firstName", action.payload.data.firstName)
            })
            .addCase(otpVerification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("userId", action.payload.data._id)
                localStorage.setItem("firstName", action.payload.data.firstName)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer