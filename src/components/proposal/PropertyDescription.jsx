import React from 'react';
import { Typography } from '@mui/material';

const PropertyDescription = ({ details }) => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          pb: '20px',
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        Property Details
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: '#333',
          fontSize: '15px',
          fontWeight: '600',
        }}
        variant="h3"
      >
        {details?.title}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: ' #333',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        {details?.description}
      </Typography>
    </div>
  );
};
export default PropertyDescription;
