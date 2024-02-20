import { createSlice } from '@reduxjs/toolkit';
import {
  AREA_UNITS,
  CURRENCY_UNITS,
  PROPERTY_TABS_DATA,
  PROPERTY_TYPES,
} from '@/app/constants/Projects/projectsFilter';

const initialState = {
  AREA_UNITS,
  CURRENCY_UNITS,
  PROPERTY_TYPES,
  PROPERTY_TABS_DATA,
};

const globalUnitsSlice = createSlice({
  name: 'globalUnits',
  initialState,
  reducers: {},
});

export default globalUnitsSlice.reducer;
