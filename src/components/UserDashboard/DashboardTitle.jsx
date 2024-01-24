import React from 'react';
import { Box } from '@mui/system';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        Weight: 500,
        fontSize: { xs: '22px', sm: '25px' },
        lineHeight: '30.26px',
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
