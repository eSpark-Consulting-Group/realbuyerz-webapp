import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: '',
  totalQuantity: 0,
  totalPrice: 0,
};

export const PakageCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      if (id == state.cart.id) {
        state.cart = {
          ...state.cart,
          quantity: state.cart.quantity + quantity,
        };
      } else {
        state.cart = { ...action.payload };
      }

      state.totalQuantity = state.cart.quantity;
      state.totalPrice += action.payload.price * quantity;
    },
  },
});

export const { addToCart } = PakageCartSlice.actions;
export default PakageCartSlice.reducer;
