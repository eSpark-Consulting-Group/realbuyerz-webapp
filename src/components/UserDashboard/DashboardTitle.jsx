import React from 'react';
import { Box } from '@mui/material';

const DashboardTitle = ({ title }) => {
  return (
    <Box
      sx={{
        fontWeight: 500,
        fontSize: '30px',
        lineHeight: '36.31px',
        color: '#000000',
        pt: '22px',
        '@media (min-width: 960px) and (max-width: 1439px)': {
          ml: '5%',
        },
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
