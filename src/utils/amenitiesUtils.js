export const transformAmenities = (amenities) => {
  try {
    if (!Array.isArray(amenities)) {
      throw new Error("Invalid input: 'amenities' should be an array.");
    }
    // Process the amenities
    return amenities
      .filter(
        (amenity) =>
          amenity && typeof amenity?.count === 'number' && amenity?.count !== 0
      ) // Filter valid items
      .map((amenity) => {
        const { id, text, image, limit, ...rest } = amenity;
        return {
          ...rest,
          imageUrl: image || '', // Default to an empty string if image is undefined
          count: amenity?.count,
        };
      });
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
