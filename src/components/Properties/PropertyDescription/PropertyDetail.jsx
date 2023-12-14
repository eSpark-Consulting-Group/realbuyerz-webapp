import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDemand from './PropertyDemand';
import PropertyMapLocation from './PropertyMapLocation';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';
import PropertyDescription from './PropertyDescription';
import PropertyOverview from '../PropertyOverview/PropertyOverview';
import { PROPERTY_ESTATE } from '@/app/constants/Properties';

const PropertyDetails = ({ propertyDetailsData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <Box sx={{ padding: '15px' }}>
          <PropertyOverview
            propertyData={propertyDetailsData}
            overview={PROPERTY_ESTATE?.propertyDetails?.overview}
          />
          <PropertyTitle
            title={propertyDetailsData?.propertyTitle}
            heading={PROPERTY_ESTATE?.propertyDetails?.title}
          />
          <PropertyDescription
            description={propertyDetailsData?.propertyDescription}
            heading={PROPERTY_ESTATE?.propertyDetails?.decription}
          />
          <PropertyMapLocation
            locationpurpose={propertyDetailsData?.propertyOverview?.purpose}
            propertyType={
              propertyDetailsData?.propertyData?.propertyType
            }
            city={propertyDetailsData?.propertyData?.propertyLocation?.city}
            location={propertyDetailsData?.propertyData?.propertyLocation?.area}
          />
          <Box sx={{ pt: '15px' }}>
            <PropertyAmenities
              propertyData={propertyDetailsData}
              heading={PROPERTY_ESTATE?.propertyDetails?.amenities}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyArea
              area={propertyDetailsData?.propertyData?.propertyArea}
              heading={PROPERTY_ESTATE?.propertyDetails?.area}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyDemand
              demand={propertyDetailsData?.propertyData?.propertyDemand}
              heading={PROPERTY_ESTATE?.propertyDetails?.demand}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyDetails;
