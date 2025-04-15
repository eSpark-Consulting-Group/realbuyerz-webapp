import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDemand from './PropertyDemand';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';
import PropertyDescription from './PropertyDescription';
import PropertyMapLocation from './PropertyMapLocation';
import PropertyOverview from './PropertyOverview';

import { PROPERTY_ESTATE } from '@/src/constants/Properties';

const PropertyDetails = ({ propertyDetailsData }) => {
  const {
    title,
    description,
    purpose,
    propertyType,
    city,
    location,
    geo_location,
    other_features,
    area,
    areaUnit,
    amount,
    amountCurrency,
  } = propertyDetailsData || {};

  const { propertyDetails } = PROPERTY_ESTATE || {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <PropertyOverview
          propertyData={propertyDetailsData}
          overview={propertyDetails?.overview}
        />

        <Box sx={{ padding: '15px' }}>
          <PropertyTitle title={title} heading={propertyDetails?.title} />
          <PropertyDescription
            description={description}
            heading={propertyDetails?.decription}
          />
          <PropertyMapLocation
            locationpurpose={purpose}
            propertyType={propertyType}
            city={city}
            location={location}
            geoLocation={geo_location}
          />

          {[
            {
              Component: PropertyAmenities,
              props: { propertyData: other_features },
              heading: propertyDetails?.amenities,
            },
            {
              Component: PropertyArea,
              props: { area, areaUnits: areaUnit },
              heading: propertyDetails?.area,
            },
            {
              Component: PropertyDemand,
              props: { demand: amount, demandUnits: amountCurrency },
              heading: propertyDetails?.demand,
            },
          ].map(({ Component, props, heading }, index) => (
            <Box key={index} sx={{ pt: '15px' }}>
              <Component {...props} heading={heading} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PropertyDetails;
