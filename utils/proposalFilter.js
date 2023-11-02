export const filterData = (data, Purpose, City, Location, PropertyType) => {
    return data.filter(
        (item) =>
            (Purpose === '' || item.purpose.toLowerCase() === Purpose.toLowerCase()) &&
            (City === '' || item.city.toLowerCase() === City.toLowerCase()) &&
            (Location === '' || item.location.toLowerCase() === Location.toLowerCase()) &&
            (PropertyType === '' || item.propertyType.toLowerCase() === PropertyType.toLowerCase())
    );
};

export const getUniqueOptions = (data) => {
    const uniquePurposeOptions = Array.from(new Set(data.map((item) => item.purpose)));
    const uniqueCityOptions = Array.from(new Set(data.map((item) => item.city)));
    const uniqueLocationOptions = Array.from(new Set(data.map((item) => item.location)));
    const uniquePropertyTypeOptions = Array.from(new Set(data.map((item) => item.propertyType)));

    return {
        purposeOptions: uniquePurposeOptions,
        cityOptions: uniqueCityOptions,
        locationOptions: uniqueLocationOptions,
        propertyTypeOptions: uniquePropertyTypeOptions,
    };
};
