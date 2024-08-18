import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const dish = action.payload;
      const quantity = dish.quantity;

      const index = state.cart.findIndex(
        (item) => item.dish.product.key === dish.product.key
      );

      if (index === -1) {
        state.cart.push({ dish });
      } else {
        if (quantity === state.cart[index].dish.quantity) {
          state.cart[index].dish.quantity += 1;
        } else if (
          quantity > state.cart[index].dish.quantity ||
          quantity < state.cart[index].dish.quantity
        ) {
          state.cart[index].dish.quantity = quantity;
        }
      }
    },
    removeFromCart: (state, action) => {
      const curKey = action.payload;

      const index = state.cart.findIndex(
        (item) => item.dish.product.key === curKey
      );
      if (index === -1) return;
      if (state.cart[index].dish.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.dish.product.key !== curKey
        );
      } else {
        state.cart[index].dish.quantity -= 1;
      }
    },
    deleteFromCart: (state, action) => {
      const curKey = action.payload;

      state.cart = state.cart.filter(
        (item) => item.dish.product.key !== curKey
      );
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
