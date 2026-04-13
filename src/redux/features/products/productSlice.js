import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProduct, getHomeProducts, getMyProducts, getProductDetails, getProducts } from "./productAction";

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        loading: false,
        error: null,
        myProducts: [],
        myProductsLoading: false,
        myProductsError: null,
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
            state.loading = true
            state.products = []
            state.error = null
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.error = null
            state.loading = false

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.error = action.payload
            state.products = []
            state.loading = false
        })

        .addCase(getMyProducts.pending, (state) => {
            state.myProductsLoading = true
            state.myProducts = []
            state.myProductsError = null
        })
        .addCase(getMyProducts.fulfilled, (state, action) => {
            state.myProducts = action.payload
            state.myProductsError = null
            state.myProductsLoading = false

        })
        .addCase(getMyProducts.rejected, (state, action) => {
            state.myProductsError = action.payload
            state.myProducts = []
            state.myProductsLoading = false
        })

        .addCase(getHomeProducts.pending, (state) => {
            state.homeProductsLoading = true
            state.homeProducts = []
            state.homeProductsError = null
        })
        .addCase(getHomeProducts.fulfilled, (state, action) => {
            state.homeProducts = action.payload
            state.homeProductsError = null
            state.homeProductsLoading = false

        })
        .addCase(getHomeProducts.rejected, (state, action) => {
            state.homeProductsError = action.payload
            state.homeProducts = []
            state.homeProductsLoading = false
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