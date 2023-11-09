import React from "react";
import { Typography } from "@mui/material";

const LiveBiddingTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        paddingTop: "60px",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "normal",
        letterSpacing: "1.95px",
      }}
    >
      {title}
    </Typography>
  );
};

export default LiveBiddingTitle;
