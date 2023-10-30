'use client';
import React from 'react';
import { Box } from '@mui/system';

import AgentAbout from '@/src/components/AgentProfile/AgentProfileAbout';
import AgentProfileState from '@/src/components/AgentProfile/AgentProfileState';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import AgentPropertiesSlider from '@/src/components/AgentProfile/AgentPropertiesSlider';
import RecentPropertyTitle from '@/src/components/AgentProfile/RecentPropertyTitle';

import {
  RECENT_PROPERTIES,
  SLIDER_CARD_DATA,
  AGENT_PROFILE_DETAILS,
  INFO,
  PROPERTIES,
} from '../constants/AgentProfileConstant';

const AgentProfile = () => {
  return (
    <Box className="mx-auto mt-4 w-[70vw]">
      <AgentProfiles data={AGENT_PROFILE_DETAILS} />
      <AgentProfileState data={PROPERTIES} />
      <AgentAbout data={INFO} />
      <RecentPropertyTitle data={RECENT_PROPERTIES} />
      <AgentPropertiesSlider data={SLIDER_CARD_DATA} />
    </Box>
  );
};

export default AgentProfile;
