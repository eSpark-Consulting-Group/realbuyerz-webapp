'use client';
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import SelectProperyType from './SelectPropertyType';
import SelectCityType from './SelectCity';
import SelectLocationType from './SelectLocationType';
import PropertyStatus from './PropertyStatus';

const Purpose = () => {
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
          backgroundSize: '70% 70%',
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
            height: { xs: '1000px', md: '900px' },
            width: '90%', 
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.locationandpurpose} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '90%', md: '700px' },
              height: { xs: '1000px', md: '600px' },
              background:"pink",
              gap: '30px',
              padding: { xs: '0px', md: '40px' },
            }}
          >
            <PropertyStatus
              PropertyInformation={PropertyInformation.purpose}
              PropertySell={PropertyInformation.sell}
            />
            <SelectProperyType />
            <SelectCityType />
            <SelectLocationType />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Purpose;
