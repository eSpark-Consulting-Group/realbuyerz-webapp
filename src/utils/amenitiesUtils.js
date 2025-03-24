export const transformAmenities = (amenities) => {
  try {
    if (!Array.isArray(amenities)) return [];

    return amenities.map(amenity => {
      // Handle both API response and existing transformed data
      const name = amenity.name || amenity.title || amenity.text || amenity.label;
      const id = amenity.id || amenity._id;
      
      if (!name) {
        console.warn("Invalid amenity object:", amenity);
        return null;
      }

      return {
        id,
        name,
        label: name,
        value: name,
        image: amenity.image || `/images/default-amenity.svg`,
        count: amenity.count || 1,
        // Add other necessary defaults
      };
    }).filter(Boolean);
  } catch (error) {
    console.error("Amenities transformation error:", error);
    return [];
  }
};