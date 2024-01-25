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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (min-width: 280px) and (max-width:445px)': {
          flexDirection: 'column',
          gap: 1,
        },
        px: { xs: 4, sm: 6, md: 7 },
        py: 3,
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
