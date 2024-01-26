'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';

import { ALL_PROPOSALS, ALL_PROPOSALS_DATA } from '@/app/constants/Dashboard';
import DashboardTitle from '@/src/components/UserDashboard/DashboardTitle';
import SearchFilterButton from '@/src/components/UserDashboard/SearchFilterButton';
import DashboardProfile from '@/src/components/UserDashboard/DashboardProfile';

const page = () => {
  return (
    <>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          width: { xs: '100%', lg: '1200px' },
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        }}
      >
        <DashboardTitle
          title={`${ALL_PROPOSALS} (${ALL_PROPOSALS_DATA.length}) `}
        />
        <Divider />
        <SearchFilterButton />
        <DashboardProfile proposalData={ALL_PROPOSALS_DATA} Height={'67.5vh'} />
      </Box>
    </>
  );
};

export default page;
