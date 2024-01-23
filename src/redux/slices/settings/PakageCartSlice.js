import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: '',
  connects: '',
  totalQuantity: 0,
  totalPrice: 0,
  dollarRate: 285.13,
  orderSummary: '',
  emptyCard: true,
  paymentMedthod: false,
  paymentMedthodDetails: []
};

export const PakageCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = { ...action.payload };
      state.totalQuantity = state.cart.quantity;
      state.totalPrice = action.payload.price;
      state.emptyCard = false;
    },
    buy: (state, action) => {
      state.connects = { ...action.payload };
      state.totalPrice += Math.round(
        action.payload.your_account_will_be_charged * state.dollarRate
      );
      state.emptyCard = false;
    },
    ProceedPayment: (state, action) => {
      state.paymentMedthodDetails = { ...action.payload };
      // state.cart = null;
      // state.connects = null;
      // state.totalPrice = 0;
      // state.totalQuantity = 0;
      // state.emptyCard = true;
      state.paymentMedthod = true;
    },
    // addPaymentMethod: (state, action) => {
    //   state.paymentMedthodDetails = { ...action.payload };
    // },

  },
});

export const { addToCart, buy, ProceedPayment, addPaymentMethod } = PakageCartSlice.actions;
export default PakageCartSlice.reducer;
