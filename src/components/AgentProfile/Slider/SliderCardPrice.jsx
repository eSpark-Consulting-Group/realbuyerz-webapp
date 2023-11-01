import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function SliderCardPrice({ price }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="body1"
        sx={{
          color: '#909394',
          fontWeight: '600',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontStyle: 'normal',
        }}
      >
        Starting from:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#FB631C',
          fontWeight: '500',
          fontFamily: 'Inter',
          marginLeft: 1,
          fontSize: '14px',
        }}
      >
        {price}
      </Typography>
    </Box>
  );
}

export default SliderCardPrice;
