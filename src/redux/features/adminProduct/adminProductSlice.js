import { createSlice } from "@reduxjs/toolkit";
import { adminEditProducts, adminGetProducts } from "./adminProductAction";

export const adminProductSlice = createSlice({
    name: "adminProductSlice",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(adminGetProducts.pending, (state) => {
            state.error = null
            state.products = []
            state.loading = true
        })
        .addCase(adminGetProducts.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.products = action.payload

        })
        .addCase(adminGetProducts.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(adminEditProducts.pending, (state) => {
            state.error = null
            state.products = []
            state.loading = true
        })
        .addCase(adminEditProducts.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.products = action.payload.data

        })
        .addCase(adminEditProducts.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export default adminProductSlice.reducer