import { createSlice } from '@reduxjs/toolkit';

const agentProfiles = {};

const initialState = {};

function generateUniqueId(agentProfiles) {
  let newId = (agentProfiles.length + 1).toString();
  while (agentProfiles.some((agentProfile) => agentProfile.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const agentProfilesSlice = createSlice({
  name: 'agentProfiles',
  initialState,
  reducers: {},
});

export default agentProfilesSlice.reducer;
