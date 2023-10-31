// redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // Initial counter value
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Reducer to increment the counter by 1
    increment: (state) => {
      state.count += 1;
    },
    // Reducer to decrement the counter by 1
    decrement: (state) => {
      state.count -= 1;
    },
    // Reducer to increment the counter by a specific amount
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
