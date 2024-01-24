import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import ProfileCompletness from '@/src/components/layouts/RightSiderBar/ProfileCompletness';
import AvailableConnects from '@/src/components/layouts/RightSiderBar/AvailableConnects';
import Profile from '@/src/components/layouts/RightSiderBar/Profile';

const BiddingProfile = ({ profileInfo }) => {
  return (
    <Box sx={{ marginTop: '15px' }}>
      <Grid container>
        <Grid
          border={2}
          item
          sx={{
            border: '1px solid #E4E4E4',
            borderRadius: '10px',
            background: '#FFF',
            width: '100%',
            height: '100%',
          }}
        >
          <Profile profileInfo={profileInfo} />
          <ProfileCompletness profileInfo={profileInfo} />
          <AvailableConnects profileInfo={profileInfo} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiddingProfile;
