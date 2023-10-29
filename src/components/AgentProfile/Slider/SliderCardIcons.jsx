import React from "react";
import { Grid } from "@mui/material";

const SliderCardIcons = ({bedIcon, pipIcon, parkingIcon}) => {
  return (
    <>
      <Grid item xs={4}>
        {bedIcon}
      </Grid>
      <Grid item xs={4}>
        {pipIcon}
      </Grid>
      <Grid item xs={4}>
        {parkingIcon}
      </Grid>
    </>
  );
};

export default SliderCardIcons;
