'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import { PROPERTY_INFORMATION } from './postlistingConstants';
import PostTitle from './PostTitle';
import AreaSize from './AreaSize';
import PropertInstallment from './PropertyInstallment';

const PropertySize = () => {
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
          backgroundImage: 'url("/assets/images/realbuyer.svg")',
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
            width: '90%',
            height: { xs: '1000px', md: '730px' },
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION.postTitles.sizeprice} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: { xs: '600px', md: '770px' },
                flexDirection: 'column',
                paddingTop: '40px',
                '@media (min-width: 960px) and (max-width: 1330px)': {
                  width: '90%',
                },
              }}
            >
              <AreaSize
                PropertySizeInformation={PROPERTY_INFORMATION.propertySize}
              />
              <PropertInstallment
                PropertyInstallmentInfo={PROPERTY_INFORMATION.installment}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertySize;
