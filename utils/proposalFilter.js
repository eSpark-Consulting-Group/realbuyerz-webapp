export const filterData = (data, Purpose, City, Location, PropertyType) => {
  return data.filter(
    (item) =>
      (Purpose === '' ||
        item.purpose.toLowerCase() === Purpose.toLowerCase()) &&
      (City === '' || item.city.toLowerCase() === City.toLowerCase()) &&
      (Location === '' ||
        item.location.toLowerCase() === Location.toLowerCase()) &&
      (PropertyType === '' ||
        item.propertyType.toLowerCase() === PropertyType.toLowerCase())
  );
};

export const getUniqueOptions = (data) => {
  const uniquePurposeOptions = getUniqueValues(data, 'purpose');
  const uniqueCityOptions = getUniqueValues(data, 'city');
  const uniqueLocationOptions = getUniqueValues(data, 'location');
  const uniquePropertyTypeOptions = getUniqueValues(data, 'propertyType');

  return {
    purposeOptions: uniquePurposeOptions,
    cityOptions: uniqueCityOptions,
    locationOptions: uniqueLocationOptions,
    propertyTypeOptions: uniquePropertyTypeOptions,
  };
};

const getUniqueValues = (data, key) => {
  const uniqueValues = [];
  data.forEach((item) => {
    if (uniqueValues.indexOf(item[key]) === -1) {
      uniqueValues.push(item[key]);
    }
  });
  return uniqueValues;
};
