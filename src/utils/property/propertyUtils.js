export const mapAndCreateFormData = (
  keyMapping,
  values,
  selectedAmenities = [],
  additionalFields = {}
) => {
  const formData = new FormData();

  Object.entries(keyMapping).forEach(([formikKey, formDataKey]) => {
    const value = values[formikKey];

    if (formikKey === 'amenity') {
      const updateAmenities = selectedAmenities.map((amen) => {
        return {
          name: amen.name,
          count: amen.count,
          imageUrl: amen.image,
        };
      });
      formData.append(formDataKey, JSON.stringify(updateAmenities || []));
    } else if (formikKey === 'images') {
      if (values.images?.length) {
        values.images.forEach((file) => {
          formData.append('image', file);
        });
      }
    } else if (value !== undefined && value !== null) {
      formData.append(formDataKey, value);
    }
  });

  Object.entries(additionalFields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};

export const convertToEmbedUrl = (url) => {
  const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url;
};