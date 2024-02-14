import React from 'react';
import { Box } from '@mui/material';

const InnerPageLayout = ({ children }) => {
  return (
    <Box sx={{ background: '#F4F5F7' }}>
      <Box maxWidth={1322} mx={'auto'}>
        {children}
      </Box>
    </Box>
  );
};

export default InnerPageLayout;
