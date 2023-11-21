'use client';
import React from 'react';

import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';

function SingleProperty() {
  const properties = useSelector((state) => state.properties.properties);

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const property = properties[id - 1];
  return (
    <>
      <Grid
        container
        sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}
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
          <PropertyDetails propertyData={property} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent agentData={property} />
        </Grid>
      </Grid>
    </>
  );
}

export default SingleProperty;
