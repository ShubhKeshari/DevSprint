import { configureStore, createReducer } from '@reduxjs/toolkit';
import themeReducer from "./features/themeSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart:cartReducer,
  },
})