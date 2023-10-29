import React from "react";
import { Typography } from "@mui/material";

const AgentTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "primary",
        fontWeight: 500,
        fontSize: "25px",
        fontStyle: "normal"

      }}
    >
      Properties By {title}
    </Typography>
  );
};
export default AgentTitle;
