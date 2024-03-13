// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   {
//     users: 'users', //for constants
//     id: 1,
//     userName: '',
//     profileImage: '/images/profile.png',
//     firstName: 'Mohammad',
//     lastName: 'Ali',
//     email: 'ali@esparkconsultants.com',
//     landline: +923192013292,
//     mobile: '+923192013292',
//     whatsapp: '+923192013292',
//     isVerified: true,

//     userType: 'user',
//     city: 'Karachi',
//     area: 'Gulistn e Johar',
//     address: '301/A, Blossom Trade Center  ',
//     country: 'Pakistan',
//     timeZone: 'GST +5:00',
//     time: '3:16pm',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //string
//     properties: [1, 2, 3, 4],
//     listings: [1, 2, 3, 4],
//     proposals: [1, 2, 3, 4],
//     biddings: [1, 2, 3, 4],
//     agencyName: 'eSpARK aGENCY', // basic, hot, Super
//     agencylogo: '/images/profile.png', //Open to contract,
//     subsPackage: 'basic', // basic, hot, Super
//     leadPreference: 'Open to contract', //Open to contract,
//     profileVisibility: 'public', // profile or Public
//     profileStatus: 'public', // public or Blocked or Reported or removed
//     profilePercentage: 50,
//     availableConnects: 50, // 0-100%
//     areaUnit: 'sq-ft', // 'sq-ft' or 'sq-m'
//     currencyUnit: 'pkr', // pkr or usd etx
//     autoReport: false, // true or false
//     verificationStatus: true, // true or false
//     emailNotification: false, // true or false
//     newsLetters: false, // true or false
//     onlineStatus: true,
//     counts: {
//       totalCount: 150,
//       rentCount: {
//         total: 75,
//         Houses: 20,
//         Flats: 20,
//         Plots: 20,
//         FarmHouses: 20,
//         Shops: 20,
//         Sffices: 20,
//         Commercials: 20,
//         // more Categories
//       },
//       sellCount: {
//         total: 75,
//         Houses: 20,
//         Flats: 20,
//         Plots: 20,
//         FarmHouses: 20,
//         Shops: 20,
//         Sffices: 20,
//         Commercials: 20,
//         // more Categories
//       },
//     },
//   },
// ];

// const loginUsersSlice = createSlice({
//   name: 'loginUsers',
//   initialState,
//   reducers: {
//     handleUserEdit: (state, action) => {
//       const updatedUser = action.payload;
//       const userIndex = state.findIndex((user) => user.id === updatedUser.id);
//       if (userIndex !== -1) {
//         state[userIndex] = { ...state[userIndex], ...updatedUser };
//       }
//     },
//     handleUserImageChange: (state, action) => {
//       state[0].profileImage = action.payload;
//     },
//   },
// });

// // // export const { handleUserEdit, handleUserImageChange } =
// // loginUsersSlice.actions;
// export default loginUsersSlice.reducer;
