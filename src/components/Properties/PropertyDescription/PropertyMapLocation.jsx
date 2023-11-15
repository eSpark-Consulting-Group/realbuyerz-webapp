import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MapFrame from '../../PostListing/MapFrame';

const PropertyMapLocation = ({ locationpurpose, propertyType, city }) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        Location & Purpose
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        Purpose: {locationpurpose}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        Property Type: {propertyType}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        City: {city}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }} variant="body1">
        Location:
      </Typography>
      <MapFrame width="100%" height="300px" />
    </Box>
  );
};
export default PropertyMapLocation;
