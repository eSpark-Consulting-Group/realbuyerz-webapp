import React from 'react';
import { Typography } from '@mui/material';

const PropertyDemand = ({ demand }) => {
  return (
    <div>
      <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Demand</Typography>
      <Typography sx={{ padding: '3px', fontSize: '16px', fontWeight: 400 }}>
        {demand}
      </Typography>
    </div>
  );
};
export default PropertyDemand;
