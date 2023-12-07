export const AGENTS_DATA = [
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
    // landline: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    // whatsapp: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    // whatsapp: {
    //   countryCode: '92',
    //   number: '3162265948',
    // },
    address: 'Hub River Road',
    city: 'Karachi',
    country: 'pakistan',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //string
    properties: [1, 2, 3, 4],
    categories: [1, 2, 3, 4],
    proposals: [1, 2, 3, 4],
    coverLetters: [1, 2, 3, 4],
    biddings: [1, 2, 3, 4],
    subsPackage: 'basic', // basic, hot, Super
    leadprefernece: 'Open to contract', //Open to contract,
    profileVisibility: 'public', // profile or Public
    profileStatus: 'public', // public or Blocked or Reported or removed
    profilePercentage: 50,
    avaibleConnects: 50, // 0-100%
    areaUnit: 'sq-ft', // 'sq-ft' or 'sq-m'
    currenyUnit: 'pkr', // pkr or usd etx
    verificationStatus: true, // true or false
    autoReport: true, // true or false
    emailNotification: true, // true or false
    newsLetters: true, // true or false
    onlineStatus: true,
    counts: {
      totalCount: 150,
      rentCount: {
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
      sellCount: {
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

export const ADD_AGENT_DATA = {
  id: 1, //id
  profileImage: '',
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
};

export const ADD_AGENT_AUTH = {
  id: 1, //id
  userName: 'armankhan', //string
  confirmPassword: '456789', //string
  newPassword: '456789', //string
  oldPassword: '123456', //string
};

export const ADD_AGENT_IMAGE = {
  id: 1, //id
  userName: 'armankhan', //string
  profilePicture: '456789', //string
  coverImage: '456789', //string
};
