import React from 'react';
import { Box, Typography } from '@mui/material';

const TabHeading = ({ currentTab }) => {
  let headingText = '';

  switch (currentTab) {
    case 'Active':
      headingText = 'Active proposals';
      break;
    case 'Archive':
      headingText = 'Archive proposals';
      break;
    case 'Rejected':
    case 'Trash':
      headingText = 'Rejected proposals';
      break;
    default:
      break;
  }
  return (
    <Box sx={{ marginLeft: '10px', marginBottom: '10px' }}>
      <Typography sx={{ fontSize: '25px', fontWeight: 500 }}>
        {headingText}
      </Typography>
    </Box>
  );
};

export default TabHeading;
