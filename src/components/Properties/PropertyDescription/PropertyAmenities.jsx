import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const PropertyAmenities = ({ propertyData, heading }) => {

  const amenities = useSelector((state) => state?.propertyAmenities?.propertyAmenities);

  const filteredAmenities = amenities?.filter((amenity) =>
    propertyData?.amenities?.includes(amenity?.id)
  );
  return (
    <>
      <Typography
        sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 600 }}
      >
        {heading}
      </Typography>
      {filteredAmenities?.map((item, index) => (
        <Typography
          sx={{
            padding: '3px',
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 500,
          }}
          key={index}
        >
          {item?.title}
        </Typography>
      ))}
    </>
  );
};
export default PropertyAmenities;
