export const ADD_PROPERTY = [
  {
    id: 1, //id
    title: 'Property Title', //text
    description:
      'loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum ', //text
    userid: 1, // current user ID
    agentid: null,
    adStatus: 'published', // draft or published //text
    locationPurpose: {
      adPurpose: 'sell', // sell or rent //text
      propertyType: 'House', // house, plots, commercial, //text
      propetySubType: 'Flat', //text
      // address:'401/B, Blossom Trade Center',
      // location: 'Gulistan e Johar',
      geolocation: '', //text
    },
    sizeBudgets: {
      propertyAreaSize: '121', //number
      propertyAreaUnits: 'sqft', //text
      propertyAreaAmount: '15,000,000', //number
      propertyAreaUnits: 'RS', //text
    },
    featureAmenities: [
      // Array object
      { id: 1, name: 'Bedrooms', count: 3 },
      { id: 2, name: 'BathRooms', count: 3 },
      { id: 3, name: 'Parking', count: 3 },
      // ...
    ],
    media: {
      //object Array
      images: ['imagesrc1', 'imagesrc1', 'imagesrc1', 'imagesrc1', 'imagesrc1'], //array
      videos: ['videosrc1', 'videosrc1', 'videosrc1', 'videosrc1', 'videosrc1'], //array
    },
  },
];
