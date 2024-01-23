import React from 'react';
import { Box, Typography } from '@mui/material';

const BidDescription = ({ details }) => {
  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: '2px solid #E4E4E4',
        p: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          color: '#000',
          fontSize: '20px',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Clients Requirement
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: '#333',
          fontSize: '16px',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
        variant="h3"
      >
        {details?.bidTitle}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: ' #333',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {details?.bidDescription}
      </Typography>
    </Box>
  );
};
export default BidDescription;
