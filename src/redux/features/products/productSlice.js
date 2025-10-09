import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProducts } from "./productAction";

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            console.log(action.payload)

        })
        .addCase(addProduct.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })
        .addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
        })
    }
})

export default productSlice.reducer