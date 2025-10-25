import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import productReducer from './features/products/productSlice'
import protectedReducer from './features/protected/protectedSlice'
import adminAuthReducer from "./features/adminAuth/adminAuthSlice";
import adminProductReducer from "./features/adminProduct/adminProductSlice";
import adminUserReducer from "./features/adminUser/adminUserSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        protected: protectedReducer,
        adminAuth: adminAuthReducer,
        adminProducts: adminProductReducer,
        adminUsers: adminUserReducer
    },
})