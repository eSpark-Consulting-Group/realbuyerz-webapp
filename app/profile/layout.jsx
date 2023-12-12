'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import { MENU_ITEM } from '../constants/LiveBidding';
import LeftSideBar from '@/src/components/layouts/LeftSideBar/LeftSideBar';

const layout = ({ children }) => {
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
        <Grid item lg={8} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default layout;
