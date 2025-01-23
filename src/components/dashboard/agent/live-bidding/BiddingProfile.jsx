import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import ProfileCompletness from '@/src/components/dashboard/layout/ProfileCompletness';
import AvailableConnects from '@/src/components/dashboard/layout/AvailableConnects';
import Profile from '@/src/components/dashboard/layout/Profile';
import { useSelector } from 'react-redux';
import {
  AVAIALABLE_CONNECTS,
  BUY_NOW,
  PROFILE_COMPLETNESS,
  PROFILE_COMPLETNESS_DESCRIPTION,
  PROFILE_IMAGE_DEFAULT,
} from '@/src/constants/agent/Live_Bidding';
import { calculateCompletionPercentage } from '@/src/utils/calculateCompletionPercentage';

const BiddingProfile = ({ userProfile }) => {
  const percentage = calculateCompletionPercentage(userProfile);
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
            width: { xs: '100%' },
            height: '100%',
            py: { xl: '1.25px' },
          }}
        >
          <Profile
            userProfile={userProfile}
            defaultImage={PROFILE_IMAGE_DEFAULT}
          />
          <ProfileCompletness
            title={PROFILE_COMPLETNESS}
            percentage={percentage}
            description={userProfile.bio}
          />
          <AvailableConnects
            connectsText={AVAIALABLE_CONNECTS}
            buyNow={BUY_NOW}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiddingProfile;
