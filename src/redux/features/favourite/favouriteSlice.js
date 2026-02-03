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
        })
        .addCase(getFavouriteProducts.fulfilled, (state, action) => {
            state.loading = false
            state.favouriteProducts = action.payload

        })
        .addCase(getFavouriteProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        .addCase(addFavouriteProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(addFavouriteProducts.fulfilled, (state, action) => {
            state.loading = false
            state.favouriteProductsMessage = action.payload

        })
        .addCase(addFavouriteProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default favouriteSlice.reducer