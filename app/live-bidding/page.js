"use client"
import React from "react";
import { Grid } from "@mui/material";

import BiddingDetails from "@/src/components/layouts/BiddingPage/BiddingDetails";
import LeftSideBar from "@/src/components/layouts/BiddingPage/LeftSideBar/LeftSideBar";
import RightSidebar from "@/src/components/layouts/BiddingPage/RightSidebar";
import { liveBiddingData } from "../constents/Live-bidding/constents";

const page = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ height: "100vh" }}>
          <LeftSideBar data={liveBiddingData}/>

        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <BiddingDetails data={liveBiddingData} />
        </Grid>
        <Grid item lg={2} md={12} sm={12} xs={12} sx={{ marginTop: "70px" }}>
          <RightSidebar data={liveBiddingData}/>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
