import { Box } from '@mui/system';
import React from 'react';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        font: 'Inter',
        Weight: 500,
        fontSize: '25px',
        lineHeight: '30.26px',
        padding: 4,
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
