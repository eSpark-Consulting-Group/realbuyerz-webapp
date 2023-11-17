import { PROPERTIES_LISTING } from '@/app/constants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const categories = {};

const initialState = { categories };

function generateUniqueId(categories) {
  let newId = (categories.length + 1).toString();
  while (categories.some((category) => category.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const propertiesCategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default propertiesCategoriesSlice.reducer;
