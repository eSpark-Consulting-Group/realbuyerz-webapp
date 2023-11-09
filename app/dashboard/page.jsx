import React from 'react';

import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA } from '@/app/constants/Constants';
import { Grid } from '@mui/material';
import DashboardContent from '@/src/components/UserDashboard/DashboardContent';

const Dashboard = () => {
  return (
    <>
      <Grid container>
        <Grid xs={2}></Grid>
        <Grid xs={8} item>
          <DashboardContent />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default Dashboard;
