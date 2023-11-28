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

const PropertyPurpose = () => {
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
            height: { xs: '1200px', md: '1000px' },
            width: '100%',
          }}
        >
          <PostTitle
            text={PROPERTY_INFORMATION.postTitles.locationandpurpose}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: { xs: '1000px', md: '800px' },
              gap: { xs: '10px', md: '30px' },
              padding: { xs: '0px', md: '40px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                gap: { xs: '10px', md: '30px' },
              }}
            >
              <PropertyStatus
                propertyInformation={PROPERTY_INFORMATION.purpose}
                propertySell={PROPERTY_INFORMATION.sell}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
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
