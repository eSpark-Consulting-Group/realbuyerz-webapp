import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from '../../../app/constants/postlistingConstants';
import MapFrame from './MapFrame';

const SelectLocationType = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '500px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            fontSize: '20px',
            fontFamily: 'Inter',
            fontWeight: 400,
            gap: '8px',
          }}
        >
          <Image
            src={PROPERTY_INFORMATION.location.images}
            width={47}
            height={45}
            alt="location"
          />
          <Typography
            sx={{
              color: '#333333',
            }}
          >
            {PROPERTY_INFORMATION.location.text}{' '}
          </Typography>
          <span style={{ color: '#FF0000' }}>*</span>
        </Box>

        <MapFrame width="100%" height="150px" />
      </Box>
    </>
  );
};
export default SelectLocationType;
