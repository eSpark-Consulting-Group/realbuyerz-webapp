'use client';
import React from 'react';

import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';

import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';
import PropertySlider from '@/src/components/AgentProfile/PropertySlider';

import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';

import { PROPERTIES_LISTING } from '@/app/constants/Properties';

function SingleProperty() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const property = PROPERTIES_LISTING[id - 1];

  return (
    <>
      <Grid
        container
        sx={{ paddingTop: '40px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Sliders propertySlider={property} />
          <PropertyDetails propertyDetailsData={property} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent agentData={property} />
        </Grid>
        <Grid item xs={12} sx={{ pb: '30px' }}>
          <PropertySlider data={AGENT_PROFILE_DATA} />
        </Grid>
      </Grid>
    </>
  );
}

export default SingleProperty;
