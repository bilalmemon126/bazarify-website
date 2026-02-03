import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import productReducer from './features/products/productSlice'
import protectedReducer from './features/protected/protectedSlice'
import adminAuthReducer from "./features/adminAuth/adminAuthSlice";
import adminProductReducer from "./features/adminProduct/adminProductSlice";
import adminUserReducer from "./features/adminUser/adminUserSlice";
import favouriteProductsReducer from "./features/favourite/favouriteSlice";
import chatReducer from "./features/chat/chatSlice";
import categoryReducer from "./features/category/categorySlice";
import locationReducer from './features/location/locationSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        protected: protectedReducer,
        adminAuth: adminAuthReducer,
        adminProducts: adminProductReducer,
        adminUsers: adminUserReducer,
        categorySlice: categoryReducer,
        favouriteProducts: favouriteProductsReducer,
        chat: chatReducer,
        locationSlice: locationReducer
    },
})