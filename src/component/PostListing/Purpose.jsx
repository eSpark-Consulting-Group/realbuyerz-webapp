'use client';
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { PROPERTY_INFORMATION } from './postlistingConstants';
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
          backgroundSize: '50% 50%',
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
            height: { xs: '1200px', md: '900px' },
            width: '90%',
          }}
        >
          <PostTitle
            text={PROPERTY_INFORMATION.postTitles.locationandpurpose}
          />
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
                flexDirection: 'column',
                width: { xs: '90%', md: '760px' },
                height: { xs: '1000px', md: '600px' },
                gap: { xs: '10px', md: '30px' },
                padding: { xs: '0px', md: '40px' },
              }}
            >
              <PropertyStatus
                PropertyInformation={PROPERTY_INFORMATION.purpose}
                PropertySell={PROPERTY_INFORMATION.sell}
              />
              <SelectProperyType
                image={PROPERTY_INFORMATION.propertyType.images}
                label={PROPERTY_INFORMATION.propertyType.text}
                iconTitle={PROPERTY_INFORMATION.IconTitle}
              />
              <SelectCityType
                image={PROPERTY_INFORMATION.city.images}
                label={PROPERTY_INFORMATION.city.text}
              />
              <SelectLocationType />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Purpose;
