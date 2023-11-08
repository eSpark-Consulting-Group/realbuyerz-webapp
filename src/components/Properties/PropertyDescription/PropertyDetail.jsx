import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDescription from './PropertyDescription';
import PropertyDemand from './PropertyDemand';
import PropertyMapLocation from './PropertyMapLocation';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';

const PropertyDetails = ({ propertyData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <Box sx={{ padding: '15px' }}>
          <PropertyTitle title={propertyData.title} />
          <PropertyDescription description={propertyData.description} />
          <PropertyMapLocation
            locationpurpose={propertyData.location.purpose}
            propertyType={propertyData.location.propertyType}
            city={propertyData.location.city}
          />
          <Box>
            <PropertyAmenities amenities={propertyData.amenities} />
          </Box>
          <Box>
            <PropertyArea area={propertyData.area} />
          </Box>
          <Box>
            <PropertyDemand demand={propertyData.demand} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyDetails;
