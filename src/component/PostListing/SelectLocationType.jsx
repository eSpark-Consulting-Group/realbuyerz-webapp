import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from './postlistingConstants';
const SelectLocationType = () => {
  return (
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
      <Image src={PROPERTY_INFORMATION.location.images} width={47} height={45} />
      <Typography
        sx={{
          color: '#333333',
        }}
      >
        {PROPERTY_INFORMATION.location.text}{' '}
      </Typography>
      <span style={{ color: '#FF0000' }}>*</span>
    </Box>
  );
};
export default SelectLocationType;
