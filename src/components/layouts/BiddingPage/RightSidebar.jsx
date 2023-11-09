'use client';
import React from 'react';
import Grid from '@mui/material/Grid';

import Profile from './RightSiderBar/Profile';
import Proposals from './RightSiderBar/Proposals';
import Cateogries from './RightSiderBar/Cateogries';
import PropertyList from './RightSiderBar/PropertyList';
import CustomDivider from './RightSiderBar/CustomDivider';
import ProfileCompletness from './RightSiderBar/ProfileCompletness';
import AvailableConnects from './RightSiderBar/AvailableConnects';

const RightSidebar = ({ profileInfo }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default RightSidebar;
