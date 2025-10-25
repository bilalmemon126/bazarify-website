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
            state.loading = true
        })
        .addCase(adminGetUsers.fulfilled, (state, action) => {
            state.loading = false
            state.adminUsers = action.payload
            console.log(action.payload)

        })
        .addCase(adminGetUsers.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })

        .addCase(adminEditUsers.pending, (state) => {
            state.loading = true
        })
        .addCase(adminEditUsers.fulfilled, (state, action) => {
            state.loading = false
            state.adminUsers = action.payload
            console.log(action.payload)

        })
        .addCase(adminEditUsers.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })
    }
})

export default adminUserSlice.reducer