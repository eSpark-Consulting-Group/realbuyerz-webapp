'use client';
import React from 'react';

import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';
import PropertySlider from '@/src/components/AgentProfile/PropertySlider';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

function SingleProperty() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const properties = useSelector((state) => state.properties.properties);
  const property = properties[id - 1];
  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property id invalid, Please add correct id.'}
      />
    );
  }
  if (!property) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This property doesnt exist. Please add correct id.`}
      />
    );
  }

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
          <ProfileAgent data={property} />
        </Grid>
        <Grid item xs={12} sx={{ pb: '30px' }}>
          <PropertySlider propertyData={property} />
        </Grid>
      </Grid>
    </>
  );
}

export default SingleProperty;
