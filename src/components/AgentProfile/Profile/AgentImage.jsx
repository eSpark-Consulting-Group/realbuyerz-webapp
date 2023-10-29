import React from "react";
import { Grid } from "@mui/material";

const AgentImage = ({ image }) => {
  return (
    <Grid
      sx={{
        width: "180px",
        height: "160px",
        margin: "auto",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={image}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </Grid>
  );
};

export default AgentImage;
