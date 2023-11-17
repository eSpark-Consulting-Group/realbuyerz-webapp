import { PROPERTIES_LISTING } from '@/app/constants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const amenities = {};

const initialState = { amenities };

function generateUniqueId(amenities) {
  let newId = (amenities.length + 1).toString();
  while (amenities.some((amenity) => amenity.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const amenitiesCategoriesSlice = createSlice({
  name: 'amenities',
  initialState,
  reducers: {},
});

export default amenitiesCategoriesSlice.reducer;
