import { PROPERTIES_CATEGORIES } from '@/app/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const propertyCategories = PROPERTIES_CATEGORIES;

const initialState = { propertyCategories };

const propertiesCategoriesSlice = createSlice({
  name: 'propertyCategories',
  initialState,
  reducers: {},
});

export default propertiesCategoriesSlice.reducer;
