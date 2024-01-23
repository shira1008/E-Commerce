import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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

      // Calc items price:
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // Calc shipping price, if the order is over 100$ the shipping gonna be free:
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calc tax price - 15% tax:
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      // Calc total price:
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
