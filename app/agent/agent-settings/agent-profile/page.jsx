'use client';
import React from 'react';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';

import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const AgentProfile = () => {
  const spacificAgent = useSelector((state) => state?.loginAgents[0]);
  console.log(spacificAgent, 'spacificAgent');
  return (
    <Box
      sx={{
        background: '#fff',
        textAlign: { xs: 'center', sm: 'left' },
        mx: { xs: 'auto', lg: 0 },
        width: {
          lg: '1200px',
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        },
      }}
    >
      <ProfileForm
        data={Agent_Profile_Form_Data}
        spacificAgent={spacificAgent}
      />
      <ProfileFormMidText />
      <ProfilePasswordForm
        data={Agent_Profile_Form_Data}
        spacificAgent={spacificAgent}
      />
    </Box>
  );
};

export default AgentProfile;
