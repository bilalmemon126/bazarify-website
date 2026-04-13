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
            state.loading = true
            state.error = null
            state.category = []
        })
        .addCase(addCategory.fulfilled, (state, action) => {
            state.category = action.payload
            state.error = null
            state.loading = false

        })
        .addCase(addCategory.rejected, (state, action) => {
            state.category = []
            state.error = action.payload
            state.loading = false
        })

        .addCase(getCategory.pending, (state) => {
            state.loading = true
            state.error = null
            state.category = []
        })
        .addCase(getCategory.fulfilled, (state, action) => {
            state.category = action.payload
            state.error = null
            state.loading = false

        })
        .addCase(getCategory.rejected, (state, action) => {
            state.error = action.payload
            state.category = []
            state.loading = false
        })
    }
})

export default categorySlice.reducer