'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import SelectProperyType from './SelectPropertyType';
import SelectCityType from './SelectCity';
import SelectLocationType from './SelectLocationType';
import PropertyStatus from './PropertyStatus';

const PropertyPurpose = ({ propertyData }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
          backgroundSize: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top 35%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: 'auto',
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <PostTitle
            text={PROPERTY_INFORMATION.postTitles.locationandpurpose}
          />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: { xs: 5, sm: 7 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: { xs: 1, sm: 2 },
              }}
            >
              <PropertyStatus
                propertyInformation={PROPERTY_INFORMATION.purpose}
                propertySell={PROPERTY_INFORMATION.sell}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
                propertyData={propertyData}
              />
              <SelectProperyType
                image={PROPERTY_INFORMATION.propertyType.images}
                label={PROPERTY_INFORMATION.propertyType.text}
                iconTitle={PROPERTY_INFORMATION.IconTitle}
                plotType={PROPERTY_INFORMATION.propertyPlot}
                commercialType={PROPERTY_INFORMATION.propertyCommercial}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
              />
              <SelectCityType
                image={PROPERTY_INFORMATION.city.images}
                label={PROPERTY_INFORMATION.city.text}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
                cityOptions={PROPERTY_INFORMATION.selectCityOptions}
              />
              <SelectLocationType />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyPurpose;
