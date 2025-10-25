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
            state.loading = true
        })
        .addCase(adminGetProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            console.log(action.payload)

        })
        .addCase(adminGetProducts.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })

        .addCase(adminEditProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(adminEditProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            console.log(action.payload)

        })
        .addCase(adminEditProducts.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })
    }
})

export default adminProductSlice.reducer