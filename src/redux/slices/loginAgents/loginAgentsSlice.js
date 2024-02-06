import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    users: 'users',
    id: 1,
    userName: '',
    profileImage: '/images/profile.png',
    firstName: 'Arman',
    lastName: 'Khan',
    email: 'arman@esparkconsultants.com',
    landline: 4523100000,
    mobile: '+923192013292',
    whatsapp: '+923192013292',
    isVerified: true,
    userType: 'agent',
    city: 'Karachi',
    area: 'Gulistn e Johar',
    address: '301/A, Blossom Trade Center  ',
    country: 'Pakistan',
    timeZone: 'GST +5:00',
    time: '3:16pm',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //string
    properties: [1, 2, 3, 4],
    listings: [1, 2, 3, 4],
    proposals: [1, 2, 3, 4],
    biddings: [1, 2, 3, 4],
    agencyName: 'eSpARK aGENCY',
    agencylogo: '/images/profile.png',
    subsPackage: 'basic',
    leadPreference: 'Open to contract',
    profileVisibility: 'public',
    profileStatus: 'public',
    profilePercentage: 50,
    availableConnects: 50,
    areaUnit: 'sq-ft',
    currencyUnit: 'pkr',
    autoReport: false,
    verificationStatus: true,
    emailNotification: false,
    newsLetters: false,
    onlineStatus: true,
    counts: {
      totalCount: 150,
      rentCount: {
        total: 75,
        Houses: 20,
        Flats: 20,
        Plots: 20,
        FarmHouses: 20,
        Shops: 20,
        Sffices: 20,
        Commercials: 20,
        // more Categories
      },
      sellCount: {
        total: 75,
        Houses: 20,
        Flats: 20,
        Plots: 20,
        FarmHouses: 20,
        Shops: 20,
        Sffices: 20,
        Commercials: 20,
        // more Categories
      },
    },
  },
];

const loginAgentsSlice = createSlice({
  name: 'loginAgents',
  initialState,
  reducers: {
    handleEdit: (state, action) => {
      const updatedAgent = action.payload;
      const agentIndex = state.findIndex(
        (agent) => agent.id === updatedAgent.id
      );
      if (agentIndex !== -1) {
        state[agentIndex] = { ...state[agentIndex], ...updatedAgent };
      }
    },
    handleImageChange: (state, action) => {
      state[0].profileImage = action.payload;
    },
  },
});

export const { handleEdit, handleImageChange } = loginAgentsSlice.actions;
export default loginAgentsSlice.reducer;
