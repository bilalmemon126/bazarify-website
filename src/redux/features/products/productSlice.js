import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProduct, getHomeProducts, getProductDetails, getProducts } from "./productAction";

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        loading: false,
        error: null,
        homeProducts: [],
        homeProductsLoading: false,
        homeProductsError: null,
        productDetails: "",
        productDetailsLoading: false,
        productDetailsError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addProduct.pending, (state) => {
            state.products = []
            state.loading = true
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload

        })
        .addCase(addProduct.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(getProducts.pending, (state) => {
            state.products = []
            state.loading = true
            state.products = []
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(getHomeProducts.pending, (state) => {
            state.homeProducts = []
            state.homeProductsError = null
            state.homeProductsLoading = true
        })
        .addCase(getHomeProducts.fulfilled, (state, action) => {
            state.homeProductsError = null
            state.homeProductsLoading = false
            state.homeProducts = action.payload

        })
        .addCase(getHomeProducts.rejected, (state, action) => {
            state.homeProducts = []
            state.homeProductsLoading = false
            state.homeProductsError = action.payload
        })

        .addCase(getProductDetails.pending, (state) => {
            state.productDetailsLoading = true
            state.productDetails = ""
        })
        .addCase(getProductDetails.fulfilled, (state, action) => {
            state.productDetailsLoading = false
            state.productDetails = action.payload

        })
        .addCase(getProductDetails.rejected, (state, action) => {
            state.productDetails = ""
            state.productDetailsLoading = false
            state.productDetailsError = action.payload
        })

        .addCase(editProduct.pending, (state) => {
            state.products = []
            state.loading = true
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload

        })
        .addCase(editProduct.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })

        .addCase(deleteProduct.pending, (state) => {
            state.products = []
            state.loading = true
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload

        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.products = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export default productSlice.reducer