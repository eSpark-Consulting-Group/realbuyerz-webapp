import React from 'react';
import { Box, Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/LoginSignup/Login/LoginSignupLayout';

const InnerPagesLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={1}
          sx={{
            background: 'green',
          }}
        />
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            background: 'pink',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            paddingTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <Grid item xs={12} md={6}>
            <LoginSignupLayout />
          </Grid>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          sx={{
            background: 'green',
          }}
        />
      </Grid>
    </>
  );
};

export default InnerPagesLayout;
