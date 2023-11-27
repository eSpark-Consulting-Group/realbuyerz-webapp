import React from 'react';
import { Box, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const BidHeader = ({ header }) => {
  return (
    <Box container borderBottom={'1px solid #E4E4E4'}>
      <Typography
        variant="h1"
        sx={{ color: '#000', fontSize: '20px', fontWeight: '500', pb: '40px' }}
      >
        Posting Help Required
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#126FAA',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          pb: '10px',
        }}
      >
        {header?.postingTitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          pb: '20px',
        }}
      >
        <LocationOnIcon fontSize={'14px'} />
        Karachi
      </Typography>
    </Box>
  );
};

export default BidHeader;
