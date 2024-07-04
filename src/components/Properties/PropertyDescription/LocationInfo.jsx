import React from 'react';
import { Box, Typography } from '@mui/material';

const LocationInfo = ({ label, value }) => (
  <Box display="flex" gap="5px">
    <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{label}:</Typography>
    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>{value}</Typography>
  </Box>
);

export default LocationInfo;
