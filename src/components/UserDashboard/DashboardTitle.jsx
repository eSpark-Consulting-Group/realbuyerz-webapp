import React from 'react';
import { Box } from '@mui/material';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        fontWeight: 500,
        fontSize: { xs: '25px', sm: '27px', md: '30px' },
        lineHeight: '36.31px',
        color: '#000000',
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
