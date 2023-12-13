'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import {
  AGENT_MENU_ITEM,
  PROFILE_INFO,
  ROUTERS,
  USER_MENU_ITEM,
} from '../constants/LiveBidding';
import RightSidebar from '@/src/components/layouts/RightSiderBar/RightSidebar';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';

const InnerPageLayout = ({ children }) => {
  const pathname = usePathname();
  const PROPSHOP = ROUTERS.buyProducts;
  const [userType, setUserType] = useState('agent');
  const menuItem = userType === 'agent' ? AGENT_MENU_ITEM : USER_MENU_ITEM;
  console.log(setUserType); // this set is not using so thts y we use in a console  to avoid build issues

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
        >
          <RightSidebar profileInfo={PROFILE_INFO} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerPageLayout;
