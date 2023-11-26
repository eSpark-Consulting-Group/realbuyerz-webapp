import React from 'react';
import { Box } from '@mui/system';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        font: 'Inter',
        Weight: 500,
        fontSize: '25px',
        lineHeight: '30.26px',
        padding: { sm: 4, xs: 2 },
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
