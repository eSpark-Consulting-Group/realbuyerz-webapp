import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
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
      <Image src={PropertyInformation.location.images} width={47} height={45} />
      <Typography
        sx={{
          color: '#333333',
        }}
      >
        {PropertyInformation.location.text}{' '}
      </Typography>
      <span style={{ color: '#FF0000' }}>*</span>
    </Box>
  );
};
export default SelectLocationType;
