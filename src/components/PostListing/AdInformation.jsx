'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import {
  PROPERTY_INFORMATION,
  PROPERTY_BUYING_DETAIL,
} from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import PropertyInformation from './PropertyInformation';

const AdInformation = ({ propertyData }) => {
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
          backgroundSize: '60% 60%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top 38%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '100%',
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION.postTitles.adInfo} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PropertyInformation
              propertyDetails={PROPERTY_INFORMATION.addInfo}
              propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
              propertyData={propertyData}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
