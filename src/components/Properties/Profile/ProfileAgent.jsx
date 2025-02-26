import React from 'react';
import { Box } from '@mui/material';

import Price from './PropertyPrice';
import AgentDescription from './AgentDescription';
import ViewAgentProfile from './ViewAgentProfile';
import { PROPERTY_ESTATE } from '@/src/constants/Properties';

const ProfileAgent = ({ data, agentData }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: {
          lg: '400px',
        },
        maxHeight: 'auto',
        minHeight: { xs: 'auto', md: '450px', lg: '550px' },
        background: 'white',
        borderRadius: { xs: 2, md: 8 },
        boxShadow: '0px 0px 4px 0px #00000040',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'left',
        px: { xs: 2, md: 3, lg: 4 },
        py: { xs: 2, md: 4, lg: 4 },
        gap: 1,
        mx: { xs: 'auto', md: '0px' },
      }}
    >
      <Price
        price={data?.amount}
        link={`user/inbox/${agentData?.id}`}
        pkr={data?.amountCurrency}
        reach={PROPERTY_ESTATE?.propertyDetails?.reach}
        message={PROPERTY_ESTATE?.propertyDetails?.message}
      />
      <ViewAgentProfile
        image={agentData?.profile_image}
        name={`${agentData?.first_name} ${agentData?.last_name} `}
        link={`/profile/${agentData?.id}`}
      />
      <AgentDescription description={agentData?.shortintro} />
    </Box>
  );
};

export default ProfileAgent;
