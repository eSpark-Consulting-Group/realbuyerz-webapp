"use client";
import AgentAbout from "@/src/components/AgentProfile/AgentProfileAbout";
import AgentProfileState from "@/src/components/AgentProfile/AgentProfileState";
import AgentProfiles from "@/src/components/AgentProfile/AgentProfiles";
import AgentPropertiesSlider from "@/src/components/AgentProfile/AgentPropertiesSlider";
import React from "react";
import {
  RecentPropertie,
  SliderCardData,
  agentProfileDetails,
  info,
} from "../constants/AgentProfileConstant";
import RecentPropertyTitle from "@/src/components/AgentProfile/RecentPropertyTitle";
import { Box } from "@mui/system";

const AgentProfile = () => {
  return (
    <Box className="w-[70vw] mx-auto mt-4">
      <AgentProfiles data={agentProfileDetails} />
      <AgentProfileState />
      <AgentAbout about={info} />
      <RecentPropertyTitle data={RecentPropertie} />
      <AgentPropertiesSlider data={SliderCardData} />
    </Box>
  );
};

export default AgentProfile;
