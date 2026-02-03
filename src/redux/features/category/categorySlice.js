import { createSlice } from "@reduxjs/toolkit"
import { addCategory, getCategory } from "./categoryAction"

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        category: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addCategory.pending, (state) => {
            state.error = null
            state.category = []
            state.loading = true
        })
        .addCase(addCategory.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.category = action.payload

        })
        .addCase(addCategory.rejected, (state, action) => {
            state.category = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(getCategory.pending, (state) => {
            state.error = null
            state.category = []
            state.loading = true
        })
        .addCase(getCategory.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.category = action.payload

        })
        .addCase(getCategory.rejected, (state, action) => {
            state.category = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export default categorySlice.reducer