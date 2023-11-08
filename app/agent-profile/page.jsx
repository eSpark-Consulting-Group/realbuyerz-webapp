'use client';
import React from 'react';
import { Box } from '@mui/system';

import AgentAbout from '@/src/components/AgentProfile/AgentProfileAbout';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import AgentSlider from '@/src/components/AgentProfile/PropertySlider';
import RecentPropertyTitle from '@/src/components/AgentProfile/RecentPropertyTitle';
import AgentProperties from '@/src/components/AgentProfile/AgentProperties';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';

const AgentProfile = () => {
  return (
    <Box className="mx-auto mt-4 w-[70vw]">
      <AgentProfiles data={AGENT_PROFILE_DATA} />
      <AgentProperties data={AGENT_PROFILE_DATA} />
      <AgentAbout data={AGENT_PROFILE_DATA} />
      <RecentPropertyTitle data={AGENT_PROFILE_DATA} />
      <AgentSlider data={AGENT_PROFILE_DATA} />
    </Box>
  );
};

export default AgentProfile;
