"use client"
import { Grid } from "@mui/material";
import React from "react";
import BiddingDetails from "./BiddingDetails";
import RightSidebar from "./RightSidebar";
import LeftSideBar from "./LeftSideBar/LeftSideBar";

const ContainerLayout = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={2}  sx={{ height:"100vh"}}>
        <LeftSideBar />
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
