import { createSlice } from "@reduxjs/toolkit";
import { adminAuthLogin, adminAuthLogout } from "./adminAuthAction";

export const adminAuthSlice = createSlice({
    name: "adminAuthSlice",
    initialState: {
        admin: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adminAuthLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminAuthLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
                localStorage.setItem("adminId", action.payload?.data?._id)
                localStorage.setItem("firstName", action.payload?.data?.firstName)
            })
            .addCase(adminAuthLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(adminAuthLogout.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminAuthLogout.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
            })
            .addCase(adminAuthLogout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default adminAuthSlice.reducer