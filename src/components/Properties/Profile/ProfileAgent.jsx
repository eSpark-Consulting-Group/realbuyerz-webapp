'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import Price from './PropertyPrice';
import AgentDescription from './AgentDescription';
import ViewAgentProfile from './ViewAgentProfile';
import { PROPERTY_ESTATE } from '@/app/constants/Properties';

const ProfileAgent = ({ agentData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} sx={{
                    paddingBottom:{xs:"30px",md:"0px"},

      }}>
        <Box
          sx={{
            maxWidth: {
              xs: '270px',
              sm: '400px',
              lg: '400px',
            },
            height: 530,
            background: 'white',
            borderRadius: 8,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            padding: 4,
            gap: 1,
            marginTop: '20px',
            mx: { xs: 'auto', md: '0px' },
          }}
        >
          <Price
            price={agentData?.agentData?.price}
            link={agentData?.agentData?.chatLink}
            pkr={PROPERTY_ESTATE.propertyDetails.pkr}
            reach={PROPERTY_ESTATE.propertyDetails.reach}
            message={PROPERTY_ESTATE.propertyDetails.message}
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
