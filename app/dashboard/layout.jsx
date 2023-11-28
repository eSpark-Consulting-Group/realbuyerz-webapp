'use client';
import React from 'react';
import { Grid } from '@mui/material';

import { MENU_ITEM, PROFILE_INFO } from '../constants/LiveBidding';
import { Box } from '@mui/system';
import RightSidebar from '@/src/components/layouts/RightSiderBar/RightSidebar';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';
import { usePathname } from 'next/navigation';

const InnerPageLayout = ({ children }) => {
  const pathname = usePathname();
  const PROPSHOP = '/prop-shop/buy-product';
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
          lg={pathname.includes(PROPSHOP) ? 7 : 8}
          md={6}
          sm={12}
          xs={12}
          sx={{ mt: 2 }}
        >
          {children}
        </Grid>
        <Grid
          item
          lg={pathname.includes(PROPSHOP) ? 3 : 2}
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
