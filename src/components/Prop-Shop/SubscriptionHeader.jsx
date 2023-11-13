import { Box, Typography } from '@mui/material';
import React from 'react';

const SubscriptionHeader = ({ headerName }) => {
  return (
    <Typography variant="h5" sx={{ pl: 3 }}>
      {headerName}
    </Typography>
  );
};

export default SubscriptionHeader;
