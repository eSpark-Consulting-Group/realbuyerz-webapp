import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import Proposals from '@/src/components/layouts/RightSiderBar/Proposals';
import Cateogries from '@/src/components/layouts/RightSiderBar/Cateogries';
import PropertyList from '@/src/components/layouts/RightSiderBar/PropertyList';
import CustomDivider from '@/src/components/layouts/RightSiderBar/CustomDivider';
import ProfileCompletness from '@/src/components/layouts/RightSiderBar/ProfileCompletness';
import AvailableConnects from '@/src/components/layouts/RightSiderBar/AvailableConnects';
import Profile from '@/src/components/layouts/RightSiderBar/Profile';

const BiddingProfile = ({ profileInfo }) => {
  return (
    <Box sx={{ marginTop: '70px' }}>
      <Grid container rowSpacing={1}>
        <Grid
          border={2}
          item
          sx={{
            border: '1px solid #E4E4E4',
            borderRadius: '10px',
            background: '#FFF',
            width: '100%',
            height: '100%',
            marginRight: '5px',
          }}
        >
          <Profile profileInfo={profileInfo} />
          <ProfileCompletness profileInfo={profileInfo} />
          <AvailableConnects profileInfo={profileInfo} />
          <CustomDivider />
          <PropertyList profileInfo={profileInfo} />
          <CustomDivider />
          <Cateogries categories={profileInfo.categories} />
        </Grid>
        <Grid
          xs={12}
          item
          sx={{
            marginRight: '5px',
          }}
        >
          <Proposals />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiddingProfile;
