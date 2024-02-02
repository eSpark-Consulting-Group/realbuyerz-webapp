'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';

import {
  PROPOSALS,
  ALL_PROPOSALS_DATA,
  PROPOSAL_DETAILS,
  BACK_TO_DASHBOARD,
  VIEW_BUTTON,
} from '@/app/constants/Dashboard';
import DashboardProfile from '@/src/components/UserDashboard/DashboardProfile';
import ProposalDetails from '@/src/components/UserDashboard/ProposalDetails';
import DashboardTitle from '@/src/components/UserDashboard/DashboardTitle';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';

const page = () => {
  return (
    <>
      <BackToDashboard
        buttonLabel={BACK_TO_DASHBOARD}
        link={'/user/dashboard'}
      />
      <DashboardTitle title={PROPOSALS} />
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
        <ProposalDetails proposalDetails={PROPOSAL_DETAILS} />
        <Divider />

        {/* <SearchFilterButton /> */}
        <DashboardProfile
          proposalData={ALL_PROPOSALS_DATA}
          Height={'67.5vh'}
          ViewLabel={VIEW_BUTTON}
        />
      </Box>
    </>
  );
};

export default page;
