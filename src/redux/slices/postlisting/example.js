import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locationAndPurpose: { adPurpose: '', propertyType: '', propetySubType: '' },
  Ad_Infomation: '',
};
const ExamplePageSlice = createSlice({
  name: 'ExamplePage',
  initialState,
  reducers: {
    addInformation: (state, action) => {
      state.Ad_Infomation = { ...action.payload };
    },
    addLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = { ...action.payload };
    },
    addPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    addpropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
  },
});

export const {
  addInformation,
  addLocationAndPuspose,
  addPropertyType,
  addpropetySubType,
} = ExamplePageSlice.actions;
export default ExamplePageSlice.reducer;
