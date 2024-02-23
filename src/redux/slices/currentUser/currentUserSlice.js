import { createSlice } from '@reduxjs/toolkit';

const user = {
  id: 301,
  first_name: 'Arman',
  last_name: 'Khan',
  email: 'arman@esparkconsultants.com',
  mobile_number: '+923192013292',
  landline_number: 4523100000,
  whatsapp: '+923192013292',
  country: 'Pakistan',
  address: '301/A, Blossom Trade Center',
  password: '123456',
  isVerified: false,
  areaUnit: 'sq-ft',
  currencyUnit: 'pkr',
  emailNotification: true,
  social_id: '',
  role: 'agent',
  profile_image: '/images/profile.png',
  status: true,
  visibility: true,
  created_at: new Date(),
  updated_at: null,
  available_connects: 0,
  property_id: '',
  proposals: [],
};

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState: {
    // ads states
    user: user,
    active: [],
    draft: [],
    trash: [],

    // proposals states
    save_requests: [],
    archive: [],
    rejected: [],
    proposals_trash: [],
  },
  reducers: {},
});

// export const {} = currentUserSlice.actions;
export default currentUserSlice.reducer;
