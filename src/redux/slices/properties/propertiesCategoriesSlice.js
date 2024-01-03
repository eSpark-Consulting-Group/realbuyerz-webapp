import { PROPERTIES_CATEGORIES } from '@/app/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const propertyCategories = PROPERTIES_CATEGORIES;

const initialState = { propertyCategories };

// function generateUniqueId(categories) {
//   let newId = (categories.length + 1).toString();
//   while (categories.some((category) => category.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const propertiesCategoriesSlice = createSlice({
  name: 'propertyCategories',
  initialState,
  reducers: {},
});

export default propertiesCategoriesSlice.reducer;
