import React from 'react';
import { Box } from '@mui/system';

import { SEE_ALL_POSTING, YOUR_POSTING } from '@/app/constants/Dashboard';

import DashboardTitle from './DashboardTitle';
import SeeAllPosting from './SeeAllPosting';

const ViewAllPosting = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <DashboardTitle title={YOUR_POSTING} />
      </Box>
      <Box>
        <SeeAllPosting title={SEE_ALL_POSTING} />
      </Box>
    </Box>
  );
};

export default ViewAllPosting;
