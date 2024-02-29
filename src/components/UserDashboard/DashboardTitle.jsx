import React from 'react';
import { Box } from '@mui/material';

const DashboardTitle = ({ title, mt, fontSize }) => {
  return (
    <Box
      sx={{
        fontWeight: 500,
        fontSize: { xs: '25px', sm: '25px', md: fontSize ? fontSize : '25px' },
        lineHeight: '36.31px',
        color: '#000000',
        mt: mt,
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
