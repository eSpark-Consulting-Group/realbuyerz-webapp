'use client';
import React, { useState } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

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
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            background: 'white',
            alignItems: 'center',
            height: { xs: '1000px', md: '900px' },
            width: '90%',
            gap: "5px",
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.locationandpurpose} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '80%', md: '700px' },
              gap: "10px",
              height: "800px",
              alignItems: "flex-start",
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
