'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import Price from './PropertyPrice';
import AgentDescription from './AgentDescription';
import ViewAgentProfile from './ViewAgentProfile';

const ProfileAgent = ({ agentData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11}>
        <Box
          sx={{
            maxWidth: {
              xs: '270px',
              sm: '400px',
              lg: '400px',
            },
            height: 500,
            background: 'white',
            borderRadius: 8,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            padding: 3,
            gap: 2,
            marginTop: '20px',
            mx: { xs: 'auto', md: '0px' },
          }}
        >
          <Price
            price={agentData?.agentData?.price}
            link={agentData?.agentData?.chatLink}
          />
          <ViewAgentProfile
            image={agentData?.agentData?.profileimage}
            name={agentData?.agentData?.name}
            link={agentData?.agentData?.profileLink}
          />
          <AgentDescription
            description={agentData?.agentData?.agentDescription}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ProfileAgent;
