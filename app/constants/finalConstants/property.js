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
      address: '401/B, Blossom Trade Center',
      area: '',
      location: 'Gulistan e Johar',
      city: 'Karachi',
      country: 'Pakistan',
      geolocation: '', //text
    },
    sizeBudgets: {
      propertyArea: {
        area: 121, //number
        unit: 'sqft', //text
      },
      propertyAmount: {
        area: 121, //number
        unit: 'sqft', //text
      },
      instalmentAvailable: true, //bolean
      readyPossession: true, //bolean
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
      images: ['imagesrc1', 'imagesrc2', 'imagesrc3', 'imagesrc4', 'imagesrc5'], //array
      videos: ['videosrc1', 'videosrc2', 'videosrc3', 'videosrc4', 'videosrc5'], //array
    },
  },
];
