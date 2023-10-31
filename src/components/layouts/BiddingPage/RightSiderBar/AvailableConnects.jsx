import React from "react";
import { Grid, Typography } from "@mui/material";

const AvailableConnects = ({data}) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
        variant={'body2'}
          sx={{
            padding: "20px 0px 20px 31px",
            color: "#FB631C",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {data.availableConnects} Available Connects
        </Typography>
      </Grid>
    </>
  );
};

export default AvailableConnects;
