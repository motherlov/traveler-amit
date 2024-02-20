import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import productSlice from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});
export default store;
