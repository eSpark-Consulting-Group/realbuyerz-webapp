'use client';
import React from 'react';
import { Grid } from '@mui/material';

import { MENU_ITEM, PROFILE_INFO } from '../constants/LiveBidding';
import { Box } from '@mui/system';
import RightSidebar from '@/src/components/layouts/RightSiderBar/RightSidebar';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';

const InnerPageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#F4F5F7',
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          lg={2}
          md={3}
          sm={12}
          xs={12}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <LeftSideBar menuItem={MENU_ITEM} />
        </Grid>
        <Grid item lg={8} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          {children}
        </Grid>
        <Grid item lg={2} md={3} sm={12} xs={12}>
          <RightSidebar profileInfo={PROFILE_INFO} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerPageLayout;
