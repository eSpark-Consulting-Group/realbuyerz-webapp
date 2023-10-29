import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AgentAboutTitle from "./AgentAboutTitle";

const AgentAbout = ({ data }) => {
  return (
    <Box
      sx={{
        marginTop: "40px",
      }}
    >
      <AgentAboutTitle title={data.contactInfo.agentName} />
          <Typography
          variant="body1"
            sx={{
              width: "100%",
              paddingBottom: "10px",
              paddingTop: "12px",
              color: "zinc.800",
              lineHeight: "25px",
            }}
          >
            {data.about.description}
          </Typography>
    </Box>
  );
};

export default AgentAbout;
