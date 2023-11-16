import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDemand from './PropertyDemand';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';
import PropertyDescription from './PropertyDescription';
import PropertyLocation from './PropertyLocation';

const PropertyDetails = ({ propertyData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <Box sx={{ padding: '15px' }}>
          <PropertyTitle title={propertyData.propertyData.title} />
          <PropertyDescription
            description={propertyData.propertyData.description}
          />
          <PropertyLocation propertyData={propertyData} />
          <Box sx={{ pt: '15px' }}>
            <PropertyAmenities
              amenities={propertyData.propertyData.amenities}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyArea area={propertyData.propertyData.area} />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyDemand demand={propertyData.propertyData.propertyDemand} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyDetails;
