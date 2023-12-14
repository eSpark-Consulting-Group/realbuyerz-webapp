'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import {
  AGENT_MENU_ITEM,
  PROFILE_INFO,
  USER_MENU_ITEM,
} from '../constants/LiveBidding';
import RightSidebar from '@/src/components/layouts/RightSiderBar/RightSidebar';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';

const InnerPageLayout = ({ children }) => {
  const [userType] = useState('agent');
  const menuItem = userType === 'agent' ? AGENT_MENU_ITEM : USER_MENU_ITEM;

  return (
    <Box
      sx={{
        backgroundColor: '#F4F5F7',
      }}
    >
      <Grid container>
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
          <LeftSideBar menuItem={menuItem} />
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12} sx={{ m: '45px 45px 75px' }}>
          {children}
        </Grid>
        <Grid item lg={2.3} md={3} sm={12} xs={12} sx={{ marginTop: '70px' }}>
          <RightSidebar profileInfo={PROFILE_INFO} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerPageLayout;
