import React from 'react';
import { Box, Typography } from '@mui/material';

const BidDescription = ({ details }) => {
  return (
    <Box sx={{ py: '20px' }}>
      <Typography
        variant="h2"
        sx={{
          pb: '20px',
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
          textAlign: 'center',
        }}
      >
        Clients Requirement
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: '#333',
          fontSize: '15px',
          fontWeight: '600',
        }}
        variant="h3"
      >
        {details?.title}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: ' #333',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        {details?.description}
      </Typography>
    </Box>
  );
};
export default BidDescription;
