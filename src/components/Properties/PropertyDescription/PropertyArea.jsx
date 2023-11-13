import React from 'react';
import { Typography } from '@mui/material';

const PropertyArea = ({ area }) => {
  return (
    <div>
      <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Area</Typography>
      <Typography sx={{ padding: '3px', fontSize: '16px', fontWeight: 400 }}>
        {area}
      </Typography>
    </div>
  );
};
export default PropertyArea;
