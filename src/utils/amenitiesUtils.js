// utils/amenitiesUtils.js
export const transformAmenities = (amenities) => {
  return amenities.map((amenity) => {
    if (!amenity) return {};
    const { id, text, image, limit, ...rest } = amenity;
    console.log(id, text, image, limit);
    return {
      ...rest,
      imageUrl: image,
      count: amenity.count || 1,
    };
  });
};
