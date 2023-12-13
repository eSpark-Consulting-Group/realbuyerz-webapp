//renamed form PROPOSALS_LISTING to PROPOSALS_DATA and links Added
//Reason: name is Not UNique and Promenent name
// FEATURED_PROPOSALS & NEWLY_LSITED_PROPOSALS Merged Propeties
export const PROPOSALS_DATA = [
  {
    id: 1,
    title: 'House #1',
    propertyTitle: 'Plot For sale Zeenatabad Society Scheme 33 Sector 19a',
    propertyDescription:
      'Plot for sale in Zeenatabad Society, Scheme 33 Sector 19A, 120 Sqyd West open corner 24 Feet road (Leased). Corner Boundary Wall Society 150 Feet Road.',
    coverImage: '/images/properties/PropertyCardImageHouse.png',
    date: '2023-11-22T14:29:32Z',
    dateWords: '1 day ago',
    agent: 1,
    user: 1,
    new: true,
    featured: true,
    categories: [1, 2],
    amenities: [11, 14, 12, 15, 12],
    sliderImages: [
      '/images/slider/apartments.svg',
      '/images/slider/houses.svg',
      '/images/slider/commercial.svg',
    ],
    propertyData: {
      agentPrice: '1.2 Crore',
      propertyDemand: '1 Crore 50 Lac',
      propertyArea: '1080 sq.ft',
      propertyType: 'Houses',
      propertyDirection: 'East Open',
      propertyLocation: {
        address: 'Sector 31 - Punjabi Saudagar City Phase 2, Scheme 33',
        purpose: 'Sell',
        Type: 'House',
        city: 'Karachi',
      },
    },
    propertyOverview: {
      type: 'Residential plot',
      location: 'Scheme 33,Karachi',
      price: '1.5 Crore',
      purpose: 'For Sale',
      bedroom: '03',
      bath: '05',
      parking: '02',
    },
  },
];

export const ADD_PROPOSAL = [
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
