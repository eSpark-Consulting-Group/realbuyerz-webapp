import React from "react";
import { Typography } from "@mui/material";
const AgentTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "text.primary",
        fontWeight: "bold",
        fontSize: "25px",
        fontFamily: "Inter",
      }}
    >
      {title}
    </Typography>
  );
};
export default AgentTitle;
