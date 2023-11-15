'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import { PROPERTY_INFORMATION } from '../../../app/constants/postlistingConstants';
import PostTitle from './PostTitle';
import PropertyAddInformation from './PropertyAddInformation';

const AdInformation = () => {
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
          backgroundPosition: 'center center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '90%',
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
            <PropertyAddInformation
              PropertyInformation={PROPERTY_INFORMATION.addInfo}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
