import React from 'react';
import { Box } from '@mui/material';

import MapFrame from '../../PostListing/MapFrame';
import PropertyLocationDetails from './PropertyLocationDetails';

const PropertyLocation = ({ propertyData }) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <PropertyLocationDetails
        locationPurpose={propertyData.location.purpose}
        propertyType={propertyData.location.Type}
        city={propertyData.location.city}
      />
      <MapFrame width="100%" height="300px" />
    </Box>
  );
};
export default PropertyLocation;
