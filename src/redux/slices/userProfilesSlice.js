import { createSlice } from '@reduxjs/toolkit';

const userProfiles = {};

const initialState = {};

function generateUniqueId(userProfiles) {
  let newId = (userProfiles.length + 1).toString();
  while (userProfiles.some((userProfile) => userProfile.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const userProfilesSlice = createSlice({
  name: 'userProfiles',
  initialState,
  reducers: {},
});

export default userProfilesSlice.reducer;
