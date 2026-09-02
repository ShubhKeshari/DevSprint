import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
}

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Increase product quantity
    increaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;
      }
    },

    // Decrease product quantity
    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },

    // Delete a specific product completely
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // Clear complete cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;