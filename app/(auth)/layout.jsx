import React from 'react';
import { Box } from '@mui/material';

import LoginSidePage from '@/src/components/LoginSignup/LoginSidePage/LoginSidePage';

const InnerPagesLayout = ({ children }) => {
  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
        maxWidth: '1500px',
        height: '100%',
        minHeight: 'calc(100vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        '@media(max-width: 767px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: {
            sm: 'calc(100% - 380px)',
            md: 'calc(100% - 500px)',
            lg: 'calc(100% - 600px)',
          },
          height: '100%',
          display: 'flex',
          borderRadius: '1rem 0 0 1rem',
          overflow: 'hidden',
          alignItems: 'center',
          pt: 3,
          '@media(max-width: 767px)': {
            display: 'none',
          },
        }}
      >
        <LoginSidePage />
      </Box>
      <Box
        sx={{
          mx: 'auto',
          width: { sm: '380px', md: '550px', lg: '600px' },
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          position: 'relative',
          '@media(max-width: 767px)': {
            width: '90%',
            justifyContent: 'center',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default InnerPagesLayout;
