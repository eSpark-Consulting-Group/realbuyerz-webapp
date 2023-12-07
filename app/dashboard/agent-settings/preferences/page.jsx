import React from 'react';
import { Grid } from '@mui/material';

import PreferenceSettings from '@/src/components/AgentPreference/AgentSetting/PreferenceSettings';

const AgentPreferenceLayout = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        md={11.5}
        sx={{
          display: 'flex',
          paddingBottom:"200px"
        }}
      >
        <PreferenceSettings />
      </Grid>
    </Grid>
  );
};
export default AgentPreferenceLayout;
