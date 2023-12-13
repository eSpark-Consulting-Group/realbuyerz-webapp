'use client';
import React from 'react';
import { Grid } from '@mui/material';

import { MENU_ITEM, PROFILE_INFO } from '../constants/LiveBidding';
import { Box } from '@mui/system';
import RightSidebar from '@/src/components/layouts/RightSiderBar/RightSidebar';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';
import { usePathname } from 'next/navigation';
import { PATH } from '../constants/paths';

const InnerPageLayout = ({ children }) => {
  const pathname = usePathname();
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
          <LeftSideBar menuItem={MENU_ITEM} />
        </Grid>
        <Grid
          item
          lg={7}
          md={6}
          sm={12}
          xs={12}
          sx={{ m: '45px 45px 75px' }}
        >
          {children}
        </Grid>
        <Grid
          item
          lg={2.3}
          md={3}
          sm={12}
          xs={12}
          sx={{ marginTop: '70px' }}
        >
          <RightSidebar profileInfo={PROFILE_INFO} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerPageLayout;
