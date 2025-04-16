import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';
import { MapProvider } from '../MapProvider';

const PropertyMapLocation = ({
  locationpurpose,
  propertyType,
  city,
  location,
}) => {
  const Map = dynamic(() => import('../Map'), { ssr: false });

  return (
    <Box sx={{ padding: '5px' }}>
      <Typography
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          fontWeight: 500,
          color: '#333333',
          p: '7px 0',
        }}
      >
        Location & Purpose
      </Typography>
      <Box display={'flex'} gap={'5px'} p={'7px 0'}>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400 }}
        >
          Purpose:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}
        >
          {locationpurpose}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'} p={'7px 0'}>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400 }}
        >
          Property Type:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}
        >
          {propertyType}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'} p={'7px 0'}>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400 }}
        >
          Location:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}
        >
          {location}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'} p={'7px 0'}>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400 }}
        >
          City:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}
        >
          {city}
        </Typography>
      </Box>
      <br></br>
      <MapProvider>
        <Map containerStyle={{ width: '100%', height: '200px' }} />
      </MapProvider>
    </Box>
  );
};
export default PropertyMapLocation;
