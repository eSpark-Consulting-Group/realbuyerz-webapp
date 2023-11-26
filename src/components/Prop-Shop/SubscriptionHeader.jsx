import React from 'react';
import { Typography } from '@mui/material';

const SubscriptionHeader = ({ headerName }) => {
  return (
    <Typography variant="h5" sx={{ pl: 3 }}>
      {headerName}
    </Typography>
  );
};

export default SubscriptionHeader;
