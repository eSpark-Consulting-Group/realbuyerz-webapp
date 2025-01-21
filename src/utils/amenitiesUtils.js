// utils/amenitiesUtils.js
export const transformAmenities = (amenities) => {
  return amenities
    .filter((amenity) => amenity && amenity.count !== 0) // Filter out items with count === 0
    .map((amenity) => {
      const { id, text, image, limit, ...rest } = amenity;
      return {
        ...rest,
        imageUrl: image,
        count: amenity?.count,
      };
    });
};
