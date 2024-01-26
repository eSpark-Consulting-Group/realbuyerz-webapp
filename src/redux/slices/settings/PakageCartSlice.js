import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: '',
  connects: '',
  totalQuantity: 0,
  totalPrice: 0,
  dollarRate: 285.13,
  orderSummary: '',
  emptyCard: true,
  paymentMedthod: false,
  formError: '',
  paymentMedthodDetails: [],
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
      state.orderSummary = { ...action.payload };
      state.paymentMedthod = true;
    },
    addPaymentMethod: (state, action) => {
      const paymentMethodWithSelection = {
        ...action.payload,
        isSelected: false,
      };
      state.paymentMedthodDetails = [...state.paymentMedthodDetails, paymentMethodWithSelection];

    },

    updatePaymentMethodSelection: (state, action) => {
      const { cardNumber, isSelected, isCheckBox } = action.payload;
      state.paymentMedthodDetails = state.paymentMedthodDetails.map((card) =>
        card.card_number === Number(cardNumber) ? { ...card, isSelected, isCheckBox } : { ...card, isSelected: false }
      );
    },
    deletePaymentMethod: (state, action) => {
      const indexToDelete = action.payload;
      state.paymentMedthodDetails.splice(indexToDelete, 1);
    },
    setFormError: (state, action) => {
      state.formError = action.payload;
    },
  },
});

export const {
  addToCart,
  buy,
  ProceedPayment,
  addPaymentMethod,
  updatePaymentMethodSelection,
  deletePaymentMethod,
  setFormError,
  toggleCheckBox,
} = PakageCartSlice.actions;

export default PakageCartSlice.reducer;
