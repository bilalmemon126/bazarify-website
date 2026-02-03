import { createSlice } from "@reduxjs/toolkit"
import { getLocation } from "./locationAction"

export const locationSlice = createSlice({
    name: "locationSlice",
    initialState: {
        location: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getLocation.pending, (state) => {
            state.loading = true
        })
        .addCase(getLocation.fulfilled, (state, action) => {
            state.loading = false
            state.location = action.payload

        })
        .addCase(getLocation.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default locationSlice.reducer