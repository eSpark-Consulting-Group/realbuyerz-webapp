import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/app/auth/signin/LoginSignupLayout';

const InnerPagesLayout = ({ children }) => {
  return (
    <>
      <Grid container bgcolor={'#FAFAFA'}>
        <Grid item xs={12} md={1} />
        <Grid
          item
          xs={12}
          md={10}
          sx={{
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
        <Grid item xs={12} md={1} />
      </Grid>
    </>
  );
};

export default InnerPagesLayout;
