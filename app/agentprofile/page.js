import AgentAbout from "@/src/components/AgentProfile/AgentProfileAbout";
import AgentProfileState from "@/src/components/AgentProfile/AgentProfileState";
import AgentProfiles from "@/src/components/AgentProfile/AgentProfiles";
import MyCarousel from "@/src/components/AgentProfile/mySlide";
import SimpleSlider from "@/src/components/AgentProfile/mySlide";
// import AgntSlider from "@/src/components/AgentProfile/AgentSlider";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  SvgIcon,
  Container,
} from "@mui/material";
import React from "react";

const AgentProfile = () => {
  return (
    <>
    <div className="w-[70vw] mx-auto mt-4">
      <AgentProfiles />
      <AgentProfileState />
      <AgentAbout />
      <MyCarousel />
    </div>
    </>

  );
};

export default AgentProfile;
