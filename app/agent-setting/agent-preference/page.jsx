import React from 'react';
import { Grid } from '@mui/material';

import PreferenceSettings from '@/src/components/AgentPreference/AgentSetting/PreferenceSettings';

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
        <PreferenceSettings />
      </Grid>

      <Grid item xs={12} md={2} />
    </Grid>
  );
};
export default AgentPreferenceLayout;
