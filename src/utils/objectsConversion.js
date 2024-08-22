const keyMapping = {
  id: 'property_id',
  userId: 'user_id',
  createdAt: 'created_at',
  propertyName: 'title',
  propertyDescription: 'description',
  propertyArea: 'area',
  propertyPrice: 'amount',
  propertyCity: 'city',
  purpose: 'purpose',
  propertyStatus: 'status',
  propertyCountry: 'country',
  propertyReadyPossession: 'readyPossession',
  propertyInstalmentAvailable: 'instalmentAvailable',
  propertyAreaUnit: 'areaUnit',
  propertyAmountCurrency: 'amountCurrency',
  PropertyData: 'PropertyData',
  amenities: 'amenities',
  isFeatured: 'isFeatured',
  proposalCount: 'proposalCount',
  propertyBy: 'propertyBy',
  propertyTypeId: 'propertyTypeId',
  propertyType: 'type',
  propertyAddress: 'address',
  latitude: 'latitude',
  longitude: 'longitude',
  propertyZip: 'zipCode',
  'propertyType.propertyType.typeName': 'propertyCategory',
  'propertyType.subTypeName': 'propertyType',
  user: 'user',
};

export const transformApiObject = (apiObj) => {
  const transformObject = {};

  for (const key in keyMapping) {
    const staticKey = keyMapping[key];
    const keys = key.split('.');

    let value = apiObj;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    if (value !== undefined) {
      transformObject[staticKey] = value;
    }
  }

  return transformObject;
};
