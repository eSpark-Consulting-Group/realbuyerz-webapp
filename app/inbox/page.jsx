'use client';
import React from 'react';
import { Grid } from '@mui/material';

import InboxContent from '@/src/components/Inbox/InboxContent';
import { CHAT_DATA } from '../constants/Inbox';

const page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={2} md={12} sm={12} xs={12}></Grid>
      <Grid item lg={8} md={12} sm={12} xs={12} sx={{ mt: 5, mb: 5 }}>
        <InboxContent data={CHAT_DATA} />
      </Grid>
      <Grid
        item
        lg={2}
        md={12}
        sm={12}
        xs={12}
        sx={{ marginTop: '70px' }}
      ></Grid>
    </Grid>
  );
};

export default page;
