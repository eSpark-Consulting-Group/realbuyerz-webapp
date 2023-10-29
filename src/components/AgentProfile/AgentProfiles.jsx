import React from "react";
import { Box, Grid } from "@mui/material";

import AgentProfileDetails from "./Profile/AgentProfileDetails";
import LetsTalk from "./Profile/LetsTalk";
import AgentImage from "./Profile/AgentImage";

const AgentProfiles = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(75, 183, 255, 0.16) 0%, rgba(75, 183, 255, 0.04) 54.17%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "185px",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "0 110px 110px 0",
        }}
      ></Box>
      <Box
        item
        sx={{
          display: "flex",
          position: "relative",
        }}
      >
        <AgentImage image={data.contactInfo.agentImage} />
        <Grid
          sx={{
            padding: 2,
            width: "100%",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              height: "auto",
              width: "100%",
            }}
          >
            <AgentProfileDetails data={data} />
            <LetsTalk />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AgentProfiles;
