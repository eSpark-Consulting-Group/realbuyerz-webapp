"use client"
import React from "react";
import { Button, Grid } from "@mui/material";

import BiddingDetails from "@/src/components/layouts/BiddingPage/BiddingDetails";
import ExpendedSiderBar from "@/src/components/layouts/BiddingPage/LeftSideBar/ExpendedSiderBar";
import RightSidebar from "@/src/components/layouts/BiddingPage/RightSidebar";
import { liveBiddingData } from "../constents/Live-bidding/constents";
import { useState } from "react";
import CollapsedSideBar from "@/src/components/layouts/BiddingPage/LeftSideBar/CollapsedSideBar";

const page = () => {
  let wHanderd = "100%";
  let wTwentty = '60px';
  const [isCollapsed, setIsCollapsed] = useState(wHanderd);
  console.log(isCollapsed, "isCollapsed")

  const collapsed = () => {
    setIsCollapsed((prevWidth) => (prevWidth === wHanderd ? wTwentty : wHanderd));
  };

  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={2} >
          <Button onClick={() => collapsed()}>isCollapsed</Button>
          {isCollapsed === wHanderd ? (
            <ExpendedSiderBar isCollapsed={isCollapsed} data={liveBiddingData} />
          ) : (
            <CollapsedSideBar isCollapsed={isCollapsed} data={liveBiddingData} />
          )}
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} >
          <BiddingDetails data={liveBiddingData} />
        </Grid>
        <Grid item lg={2} md={12} sm={12} xs={12} sx={{ marginTop: "70px" }}>
          <RightSidebar data={liveBiddingData} />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
