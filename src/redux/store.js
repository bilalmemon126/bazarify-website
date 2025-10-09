import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import productReducer from './features/products/productSlice'
import protectedReducer from './features/protected/protectedSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        protected: protectedReducer
    },
})