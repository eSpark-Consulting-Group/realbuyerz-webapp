export const PROPERTIES_LISTING = [
    {
      id: 1,
      Propertytitle: 'House #1',
      coverImage: '/images/properties/PropertyCardImageHouse.png',
      postedDate: '1 day ago',
      propertyData: {
        propertyPrice: '1.2 Crore',
        propertyDemand: '1 Crore 50 Lac',
        area: '1080 sq.ft',
        title: 'Plot For sale Zeenatabad Society Scheme 33 Sector 19a',
        description:
          'Plot for sale in Zeenatabad Society, Scheme 33 Sector 19A, 120 Sqyd West open corner 24 Feet road (Leased). Corner Boundary Wall Society 150 Feet Road.',
        type: 'Houses',
        direction: 'East Open',
        location: {
          address: 'Sector 31 - Punjabi Saudagar City Phase 2, Scheme 33',
          purpose: 'Sell',
          Type: 'House',
          city: 'Karachi',
        },
        amenities: [
          'Park',
          'Masjid',
          'Playground',
          '24 Hours CCTV Security System',
          '24 Hours Water Supply',
        ],
      },
      agentData: {
        id: 1,
        price: '1.5 Crore',
        profileimage: '/images/agent-profile/profileimage.svg',
        name: 'Arman Khan',
        agentDescription:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        profileLink: '/agents/1',
        chatLink: '/chat/agent/1',
      },
      propertyDetails: {
        type: 'Residential plot',
        location: 'Scheme 33,Karachi',
        price: '1.5 Crore',
        purpose: 'For Sale',
        bedroom: '03',
        bath: '05',
        parking: '02',
      },
      sliderImages: [
        {
          images: '/images/slider/apartments.svg',
        },
        {
          images: '/images/slider/houses.svg',
        },
        {
          images: '/images/slider/commercial.svg',
        },
      ],
    },
]

//renamed form CATEGORIES to PROPERTIES_CATEGORIES and links Added
//Reason: catgories is Not UNique and Promenent name
export const PROPERTIES_CATEGORIES = [
  {
    id: 1,
    image: '/images/categories/category1.svg',
    name: 'Category 1',
    link: '/',
  },
  {
    id: 2,
    image: '/images/categories/category2.svg',
    name: 'Category 2',
    link: '/',
  },
  {
    id: 3,
    image: '/images/categories/category3.svg',
    name: 'Category 3',
    link: '/',
  },
  {
    id: 4,
    image: '/images/categories/category4.svg',
    name: 'Category 4',
    link: '/',
  },
  {
    id: 5,
    image: '/images/categories/category5.svg',
    name: 'Category 5',
    link: '/',
  },
  {
    id: 6,
    image: '/images/categories/category6.svg',
    name: 'Category 6',
    link: '/',
  },
  {
    id: 7,
    image: '/images/categories/category7.svg',
    name: 'Category 7',
    link: '/',
  },
  {
    id: 8,
    image: '/images/categories/category8.svg',
    name: 'Category 8',
    link: '/',
  },
];

// reduce Data lenght for efficey prpouse 
//Reason: to much data (from 200 lines to 20)
export const POPULAR_LOCATIONS_DATA = {
  title:'Popular Locations',
  description:'To browse & buy in your areas of interest. Look of properties by category',
  listingType: ['Sell', 'Rent'],
  property_types: [
    'Houses',
    'Flats',
    'Plots',
    'Farm Houses',
    'Shops',
    'Offices',
  ],
  locations: [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Rawalpindi',
    'Faislabad',
    'Abbottabad',
    'Multan',
    'Heydrabad',
    'Peshawar',
    'Sargodha',
  ],
};