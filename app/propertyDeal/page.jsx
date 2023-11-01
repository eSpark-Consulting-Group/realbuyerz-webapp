import React from 'react';
import { Grid } from '@mui/material';

import Sliders from '@/src/components/loginsignup/Slider/slider';
import ProfileAgent from '@/src/components/loginsignup/Profile/ProfileAgent';
import PropertyOverview from '@/src/components/loginsignup/PropertyOverview/PropertyOverview';
import PropertyDetails from '@/src/components/loginsignup/PropertyDescription/PropertyDetail';
import { propertyData } from '@/app/constants/propertyconstants';

const propertyDeal = () => {
  return (
    <>
      <Grid
        container
        sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Sliders />
          <PropertyOverview />
          <PropertyDetails propertyData={propertyData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent />
        </Grid>
      </Grid>
    </>
  );
};
export default propertyDeal;
