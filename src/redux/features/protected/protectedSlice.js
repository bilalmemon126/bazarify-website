import { createSlice } from "@reduxjs/toolkit";
import { protectedRoute } from "./protectedAction";

export const protectedSlice = createSlice({
    name: "protectedSlice",
    initialState: {
        protected: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(protectedRoute.pending, (state) => {
                state.loading = true
            })
            .addCase(protectedRoute.fulfilled, (state, action) => {
                state.loading = false
                state.protected = action.payload
            })
            .addCase(protectedRoute.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default protectedSlice.reducer