import React from 'react';
import { Grid } from '@mui/material';

import PreferenceSetting from '@/src/components/AgentPreference/AgentSetting/PreferenceSetting';
const AgentPreferenceLayout = () => {
  return (
    <Grid
      container
      sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}
    >
      <Grid item xs={12} md={2} />
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <PreferenceSetting />
      </Grid>

      <Grid item xs={12} md={2} />
    </Grid>
  );
};
export default AgentPreferenceLayout;
