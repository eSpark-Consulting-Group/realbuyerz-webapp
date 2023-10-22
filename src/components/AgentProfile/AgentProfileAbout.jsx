import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AgentTitle from "./AgentTitle";

const AgentAbout = ({ about }) => {
  return (
    <Box
      sx={{
        marginTop: "40px",
      }}
    >
      <AgentTitle title={"About Arman Khan"} />
      {about.map((items) => {
        return (
          <Typography
            sx={{
              width: "100%",
              paddingBottom: "10px",
              paddingTop: "12px",
              color: "zinc.800",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "normal",
              lineHeight: "25px",
            }}
          >
            {items.about}
          </Typography>
        );
      })}
    </Box>
  );
};

export default AgentAbout;
