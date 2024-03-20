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

const PropertyPurpose = ({ propertyData, formik }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
        height: { xs: 'auto', xl: '1010px' },
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
          backgroundSize: '60% 60%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top 38%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
          }}
        >
          <PostTitle text={propertyData?.postTitles?.locationandpurpose} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: { xs: 5, sm: 6 },
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
                propertyInformation={PROPERTY_INFORMATION?.purpose}
                propertySell={PROPERTY_INFORMATION?.buy}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                propertyData={propertyData}
                formik={formik}
              />
              <SelectProperyType
                image={PROPERTY_INFORMATION?.propertyType?.images}
                label={PROPERTY_INFORMATION?.propertyType?.text}
                iconTitle={PROPERTY_INFORMATION?.IconTitle}
                plotType={PROPERTY_INFORMATION?.propertyPlot}
                commercialType={PROPERTY_INFORMATION?.propertyCommercial}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                formik={formik}
              />
              <SelectCityType
                image={PROPERTY_INFORMATION?.city?.images}
                label={PROPERTY_INFORMATION?.city?.text}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                cityOptions={PROPERTY_INFORMATION?.selectCityOptions}
                formik={formik}
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
