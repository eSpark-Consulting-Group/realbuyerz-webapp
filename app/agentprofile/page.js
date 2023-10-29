"use client";
import React from "react";
import { Box } from "@mui/system";

import {agentProfileData} from "../constents/AgentProfile"
import AgentAbout from "@/src/components/AgentProfile/AgentProfileAbout";
import AgentProfiles from "@/src/components/AgentProfile/AgentProfiles";
import AgentSlider from "@/src/components/AgentProfile/SlickSlider";
import RecentPropertyTitle from "@/src/components/AgentProfile/RecentPropertyTitle";
import AgentProperties from "@/src/components/AgentProfile/AgentProperties";

const AgentProfile = () => {
  return (
      <Box className="w-[70vw] mx-auto mt-4">
        <AgentProfiles data={agentProfileData}/>
        <AgentProperties data={agentProfileData} />
        <AgentAbout data={agentProfileData} />
        <RecentPropertyTitle data={agentProfileData} />
        <AgentSlider data={agentProfileData} />
      </Box>
  );
};

export default AgentProfile;
