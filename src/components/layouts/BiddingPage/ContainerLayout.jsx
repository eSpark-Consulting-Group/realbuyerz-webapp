"use client"
import { Grid } from "@mui/material";
import React from "react";
import BiddingDetails from "./BiddingDetails";
import RightSidebar from "./RightSidebar";

const ContainerLayout = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={2}  sx={{ backgroundColor: 'yellow'}}>
        {/* Content for the first Grid item */}
      </Grid>
      <Grid item lg={8}  md={12}  sm={12} xs={12}>
            <BiddingDetails />
      </Grid>
      <Grid item lg={2} md={12}  sm={12} xs={12} sx={{ marginTop: "70px"}}>
        <RightSidebar />
      </Grid> 
    </Grid> 
  );
};

export default ContainerLayout;
