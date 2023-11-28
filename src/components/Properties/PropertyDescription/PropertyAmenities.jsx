import React from 'react';
import { Typography } from '@mui/material';

const PropertyAmenities = ({ amenities, heading }) => {
  return (
    <div>
      <Typography
        sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 600 }}
      >
        {heading}
      </Typography>
      {amenities.map((item, index) => (
        <Typography
          sx={{
            padding: '3px',
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 500,
          }}
          key={index}
        >
          {item}
        </Typography>
      ))}
    </div>
  );
};
export default PropertyAmenities;
