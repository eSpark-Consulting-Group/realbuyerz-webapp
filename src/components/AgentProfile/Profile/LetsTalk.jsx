import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const LetsTalk = () => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        paddingRight: "10px",
      }}
    >
      <Paper
        sx={{
          background: "white",
          borderRadius: "17px",
          boxShadow: 2,
          padding: 2,
          marginLeft: "auto",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "#126FAA" }}
        >
          Lets talk
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LetsTalk;
