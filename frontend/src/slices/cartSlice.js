import { createSlice } from '@reduxjs/toolkit';
import { updatedCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (cartitem) => cartitem._id === item._id
      );

      // update the quantity
      if (existItem) {
        state.cartItems = state.cartItems.map((cartitem) =>
          cartitem._id === existItem._id ? item : cartitem
        );

        // add the new item
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updatedCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
