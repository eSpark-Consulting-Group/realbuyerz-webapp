import { PRIVACY_POLICY } from '@/app/constants/PrivacyPolicy';
import { createSlice } from '@reduxjs/toolkit';

const policies = PRIVACY_POLICY;

const initialState = { policies };

// function generateUniqueId(policies) {
//   let newId = (policies.length + 1).toString();
//   while (policies.some((policy) => policy.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {},
});

export default policiesSlice.reducer;
