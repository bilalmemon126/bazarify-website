import { createSlice } from "@reduxjs/toolkit";
import { adminEditUsers, adminGetUsers } from "./adminUserAction";

export const adminUserSlice = createSlice({
    name: "adminUserSlice",
    initialState: {
        adminUsers: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(adminGetUsers.pending, (state) => {
            state.error = null
            state.adminUsers = []
            state.loading = true
        })
        .addCase(adminGetUsers.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.adminUsers = action.payload.data

        })
        .addCase(adminGetUsers.rejected, (state, action) => {
            state.adminUsers = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(adminEditUsers.pending, (state) => {
            state.error = null
            state.adminUsers = []
            state.loading = true
        })
        .addCase(adminEditUsers.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.adminUsers = action.payload

        })
        .addCase(adminEditUsers.rejected, (state, action) => {
            state.adminUsers = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export default adminUserSlice.reducer