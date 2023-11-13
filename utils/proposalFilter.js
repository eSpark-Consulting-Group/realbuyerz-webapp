export const filterData = (
  selectedData,
  purpose,
  city,
  location,
  propertyType
) => {
  return selectedData.filter(
    (item) =>
      (purpose === '' ||
        item.purpose.toLowerCase() === purpose.toLowerCase()) &&
      (city === '' || item.city.toLowerCase() === city.toLowerCase()) &&
      (location === '' ||
        item.location.toLowerCase() === location.toLowerCase()) &&
      (propertyType === '' ||
        item.propertyType.toLowerCase() === propertyType.toLowerCase())
  );
};

export const getUniqueFilteredOptions = (selectedData) => {
  const uniquePurposeOptions = getUniqueFilteredValues(selectedData, 'purpose');
  const uniqueCityOptions = getUniqueFilteredValues(selectedData, 'city');
  const uniqueLocationOptions = getUniqueFilteredValues(
    selectedData,
    'location'
  );
  const uniquePropertyTypeOptions = getUniqueFilteredValues(
    selectedData,
    'propertyType'
  );

  return {
    purposeOptions: uniquePurposeOptions,
    cityOptions: uniqueCityOptions,
    locationOptions: uniqueLocationOptions,
    propertyTypeOptions: uniquePropertyTypeOptions,
  };
};

const getUniqueFilteredValues = (selectedData, key) => {
  const uniqueFilteredValues = [];
  selectedData.forEach((item) => {
    if (uniqueFilteredValues.indexOf(item[key]) === -1) {
      uniqueFilteredValues.push(item[key]);
    }
  });
  return uniqueFilteredValues;
};
