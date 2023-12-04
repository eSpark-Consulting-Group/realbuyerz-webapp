import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Ad_Infomation: '',
  locationAndPurpose: {
    adPurpose: '',
    propertyType: '',
    propetySubType: '',
    city: '',
    location: '',
  },
  Property_Size_and_Pricing: {},
};
const ExamplePageSlice = createSlice({
  name: 'ExamplePage',
  initialState,
  reducers: {
    //Ad_Infomation
    addInformation: (state, action) => {
      state.Ad_Infomation = { ...action.payload };
    },
    //locationAndPurpose
    addLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = action.payload;
    },
    addPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    addpropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
    addCity: (state, action) => {
      state.locationAndPurpose.city = action.payload;
    },
    //Property_Size_and_Pricing
  },
});

export const {
  addInformation,
  addLocationAndPuspose,
  addPropertyType,
  addpropetySubType,
  addCity,
} = ExamplePageSlice.actions;
export default ExamplePageSlice.reducer;
