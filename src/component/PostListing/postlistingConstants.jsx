export const PROPERTY_INFORMATION = {
  property: [
    {
      image: '/assets/images/home.svg',
      title: 'Listings Information',
    },
    {
      image: '/assets/images/Property.svg',
      title: 'Property Price',
    },
    {
      image: '/assets/images/Gallery.svg',
      title: 'Good Property Images',
    },
  ],
  IconTitle: [
    {
      image: 'assets/images/housesell.svg',
      title: 'House',
      label: 'houseBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Flat',
      label: 'flatBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Upper Portion',
      label: 'upperPortionBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Lower Portion',
      label: 'lowerPortionBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Farm House',
      label: 'farmHouseBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Room',
      label: 'roomBtn',
      value: '',
    },
    {
      image: 'assets/images/house.svg',
      title: 'Rent House',
      label: 'rentHouseBtn',
      value: '',
    },
  ],
  postTitles: {
    adInfo: 'Ad information',
    locationandpurpose: 'Location & Purpose',
    sizeprice: 'Property Size and Pricing',
    featureamenities: 'Features & Amenities',
    imagesvidoes: 'Property Images and Videos',
  },
  addInfo: [
    {
      image: 'assets/images/Title.svg',
      text: 'Title',
      placeholder: 'Enter property title e.g. Beautiful House in DHA Phase 5',
      label: 'title',
      value: '',
    },
    {
      image: 'assets/images/Description.svg',
      text: 'Description',
      placeholder: 'Describe your property, it’s features, area it is in etc.',
      label: 'description',
      value: '',
    },
  ],

  sell: [
    {
      images: 'assets/images/housesell.svg',
      text: 'Sell',
      label: 'sellBtn',
      value: '',
    },
    {
      images: 'assets/images/house.svg',
      text: 'Rent',
      label: 'rentBtn',
      value: '',
    },
  ],
  purpose: {
    images: 'assets/images/select.svg',
    text: 'Select Purpose',
  },
  propertyType: {
    images: 'assets/images/buildings.svg',
    text: 'Select Property Type',
  },

  city: {
    images: 'assets/images/pinlocation.svg',
    text: 'Select City',
  },
  location: {
    images: 'assets/images/location.svg',
    text: 'Select Location',
  },
  propertySize: [
    {
      image: 'assets/images/areasize.svg',
      text: 'Area Size',
      placeholder: 'Enter Unit',
      option: '1000sq',
      label: 'enterUnit',
      value: '',
    },
    {
      image: 'assets/images/amount.svg',
      text: 'Amount ',
      placeholder: 'Enter Amount.',
      option: '2000sq',
      label: 'enterAmount',
      value: '',
    },
  ],

  selectCityOptions: [
    {
      label: 'Karachi',
      value: 'Karachi',
      name: 'selectCityOptions',
      values: '',
    },
    {
      label: 'Lahore',
      value: 'Lahore',
      name: 'selectCityOptions',
      values: '',
    },
  ],

  installment: [
    {
      image: 'assets/images/installment.svg',
      title: 'Instalment available ',
      description: 'Enable if listing is available on instalments',
      value: false,
      label: 'installmentAvailable',
    },
    {
      image: 'assets/images/notepad.svg',
      title: 'Ready For Possession ',
      description: 'Enable if listing is ready for possession',
      value: false,
      label: 'readyForProcession',
    },
  ],
  feature: [
    {
      image: 'assets/images/bed.svg',
      title: 'Bedrooms',
    },
    {
      image: 'assets/images/room.svg',
      title: 'Bathrooms',
    },
    {
      image: 'assets/images/parking.svg',
      title: 'Parking',
    },
  ],
  upload: {
    images: 'assets/images/select.svg',
    text: 'Upload Images and video of your Property *',
  },
  uploadButton: [
    {
      label: 'Upload Images',
      text: 'uploadImages',
      value: '',
    },
    {
      label: 'Upload Video ',
      text: 'uploadVideo',
      value: '',
    },
  ],
  uploadInstruction: [
    {
      image: 'assets/images/tick.svg',
      text: 'Cover all areas of your property',
    },
    {
      image: 'assets/images/tick.svg',
      text: 'Maximum 5 pictures and 5 videos can be uploaded',
    },
    {
      image: 'assets/images/tick.svg',
      text: 'Ads with picture got 5x more views and leads',
    },
    {
      image: 'assets/images/tick.svg',
      text: 'Upload good quality pictures with proper lighting',
    },
    {
      image: 'assets/images/tick.svg',
      text: 'The video upload feature is optional; you can choose to upload photos without including a video.',
    },
  ],
};

export const PROPERTY_BUYING_DETAIL = {
  sellingDetails: {
    title: '',
    description: '',
    enterUnit: '',
    enterAmount: '',
    installmentAvailable: false,
    readyForProcession: false,
    addAmenities: '',
    uploadImage: '',
    uploadVideo: '',
    selectCityOptions: '',
    sellBtn: '',
    rentBtn: '',
    houseBtn: '',
    flatBtn: '',
    upperPortionBtn: '',
    lowerPortionBtn: '',
    farmHouseBtn: '',
    roomBtn: '',
    pentHouseBtn: '',
      incrementBtn: {
      value: 0, 
    },
  },
};
