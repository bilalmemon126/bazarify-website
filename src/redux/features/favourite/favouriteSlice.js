import { createSlice } from "@reduxjs/toolkit";
import { addFavouriteProducts, getFavouriteProducts } from "./favouriteAction";

export const favouriteSlice = createSlice({
    name: "favouriteSlice",
    initialState: {
        favouriteProducts: [],
        favouriteProductsMessage: "",
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFavouriteProducts.pending, (state) => {
            state.loading = true
            state.error = null
            state.favouriteProducts = []
        })
        .addCase(getFavouriteProducts.fulfilled, (state, action) => {
            state.favouriteProducts = action.payload
            state.error = null
            state.loading = false

        })
        .addCase(getFavouriteProducts.rejected, (state, action) => {
            state.favouriteProducts = []
            state.error = action.payload
            state.loading = false
        })

        .addCase(addFavouriteProducts.pending, (state) => {
            state.loading = true
            state.favouriteProducts = []
            state.error = null
            state.favouriteProductsMessage = ""
        })
        .addCase(addFavouriteProducts.fulfilled, (state, action) => {
            state.favouriteProductsMessage = action.payload.message
            state.favouriteProducts = []
            state.error = null
            state.loading = false

        })
        .addCase(addFavouriteProducts.rejected, (state, action) => {
            state.favouriteProductsMessage = ""
            state.favouriteProducts = []
            state.error = action.payload
            state.loading = false
        })
    }
})

export default favouriteSlice.reducer