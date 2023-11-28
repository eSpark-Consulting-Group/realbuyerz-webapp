import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDemand from './PropertyDemand';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';
import PropertyDescription from './PropertyDescription';
import PropertyLocation from './PropertyLocation';
import { PROPERTY_ESTATE } from '@/app/constants/Properties';
import { usePathname } from 'next/navigation';

const PropertyDetails = ({ propertyDetailsData }) => {
  const properties = useSelector((state) => state.properties.properties);

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const property = properties[id - 1];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <Box sx={{ padding: '15px' }}>
          <PropertyOverview
            propertyData={property}
            overview={PROPERTY_ESTATE.propertyDetails.overview}
          />
          <PropertyTitle
            title={propertyDetailsData.propertyData.title}
            heading={PROPERTY_ESTATE.propertyDetails.title}
          />
          <PropertyDescription
            description={propertyDetailsData.propertyData.description}
            heading={PROPERTY_ESTATE.propertyDetails.decription}
          />
          <PropertyLocation propertyData={propertyData} />
          <Box sx={{ pt: '15px' }}>
            <PropertyAmenities
              amenities={propertyDetailsData.propertyData.amenities}
              heading={PROPERTY_ESTATE.propertyDetails.amenities}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyArea
              area={propertyDetailsData.propertyData.area}
              heading={PROPERTY_ESTATE.propertyDetails.area}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyDemand
              demand={propertyDetailsData.propertyData.propertyDemand}
              heading={PROPERTY_ESTATE.propertyDetails.demand}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyDetails;
