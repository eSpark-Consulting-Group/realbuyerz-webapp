import React from 'react';
import { Box } from '@mui/system';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        Weight: 500,
        fontSize: { xs: '22px', sm: '30px' },
        lineHeight: '36.31px',
        color: '#000000',
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
