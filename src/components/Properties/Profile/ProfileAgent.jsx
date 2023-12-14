import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';

import Price from './PropertyPrice';
import AgentDescription from './AgentDescription';
import ViewAgentProfile from './ViewAgentProfile';
import { PROPERTY_ESTATE } from '@/app/constants/Properties';

const ProfileAgent = ({ data }) => {
  const agents = useSelector((state) => state?.agents?.agents?.agentData);

  const selectedAgent = agents.find((agent) => agent?.id === data?.agent);
  console.log("selectedAgent", selectedAgent);

  if (!selectedAgent) {
    console.error(`Agent with id ${data} not found`);
    // Remove 'return null;' to allow the execution of the JSX block below
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
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
            price={data?.propertyData?.agentPrice}
            link={`/agents/inbox/${selectedAgent?.id}`}
            pkr={PROPERTY_ESTATE?.propertyDetails?.unit}
            reach={PROPERTY_ESTATE?.propertyDetails?.reach}
            message={PROPERTY_ESTATE?.propertyDetails?.message}
          />
          <ViewAgentProfile
            image={selectedAgent?.profileImage}
            name={`${selectedAgent?.firstName} ${selectedAgent?.lastName} `}
            link={`agents/${selectedAgent?.id}`}
          />
          <AgentDescription
            description={selectedAgent?.about}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileAgent;
