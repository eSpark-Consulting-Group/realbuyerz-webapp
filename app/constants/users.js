export const USERS_DATA = [
  {
    id: 1,
    userName: 'ArmanKhan',
    profileImage: '',
    firstName: 'Arman',
    lastName: 'Khan',
    email: 'armanespark@gmail.com',
    landline: +424564879798,
    mobile: +424564879798,
    whatsapp: +914564879798,
    // phone: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    // whatsapp: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    // country: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    city: 'Karachi',
    address: 'Hub River Road',
    country: 'pakistan',
    properties: [1, 2, 3, 4],
    listings: [1, 2, 3, 4],
    proposals: [1, 2, 3, 4],
    biddings: [1, 2, 3, 4],
    profileVisibility: 'public', // profile or Public
    profileStatus: 'public', // public or Blocked or Reported or removed
    // profilePercentage: 50,
    verificationStatus: 50, // 0-100%
    areaUnit: 'sq-ft', // 'sq-ft' or 'sq-m'
    currenyUnit: 'pkr', // pkr or usd etx
    autoReport: true, // true or false
    emailNotification: true, // true or false
    newsLetters: true, // true or false
    onlineStatus: true,
    counts: {
      totalCount: 150,
      rentcount: {
        total: 75,
        houses: 20,
        flats: 20,
        plots: 20,
        farmHouses: 20,
        shops: 20,
        offices: 20,
        commercials: 20,
        // more Categories
      },
      rentcount: {
        total: 75,
        houses: 20,
        flats: 20,
        plots: 20,
        farmHouses: 20,
        shops: 20,
        offices: 20,
        commercials: 20,
        // more Categories
      },
    },
  },
];

export const ADD_USER_DATA = [
  {
    id: 1, //id
    userName: 'muahhmadali', //string
    firstName: 'Muhammad', //string
    lastName: 'Ali', //string
    email: 'ali@esparkconsultants.com', //email
    address: 'Liaquatabad', //string
    city: 'karachi', //string
    country: 'pakistan', //string
    landline: +424564879798, //tel
    mobile: +424564879798, //tel
    whatsapp: +914564879798, //tel
    about: '45648797984564879798456487979845648797984564879798', //string
  },
];

export const ADD_USER_AUTH = {
  id: 1, //id
  userName: 'armankhan', //string
  confirmPassword: '456789', //string
  newPassword: '456789', //string
  oldPassword: '123456', //string
};

export const ADD_USER_IMAGE = {
  id: 1, //id
  userName: 'armankhan', //string
  profilePicture: '456789', //string
  coverImage: '456789', //string
};
