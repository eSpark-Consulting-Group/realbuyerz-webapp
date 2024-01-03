import { PROPERTIES_AMENITIES } from '@/app/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const propertyAmenities = PROPERTIES_AMENITIES;

const initialState = { propertyAmenities };

// function generateUniqueId(amenities) {
//   let newId = (amenities.length + 1).toString();
//   while (amenities.some((amenity) => amenity.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const propertiesAmenitiesSlice = createSlice({
  name: 'propertyAmenities',
  initialState,
  reducers: {},
});

export default propertiesAmenitiesSlice.reducer;
