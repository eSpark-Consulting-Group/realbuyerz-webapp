'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/src/constants/postListing';
import PostTitle from './PostTitle';
import PropertyAreaSize from './PropertyAreaSize';
import PropertyInstallment from './PropertyInstallment';

const PropertySize = ({ formik }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
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
          backgroundPosition: 'center top 40%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'auto',
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION?.postTitles?.sizeprice} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: 7,
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
              }}
            >
              <PropertyAreaSize
                propertySizeInformation={PROPERTY_INFORMATION?.propertySize}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                selectCity={PROPERTY_INFORMATION?.selectCityOptions}
                aeraSizes={PROPERTY_INFORMATION?.aeraSizes}
                currency={PROPERTY_INFORMATION?.currency}
                formik={formik}
              />
              <PropertyInstallment
                propertyInstallmentInfo={PROPERTY_INFORMATION?.installment}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                formik={formik}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertySize;
