"use client"
import { useState } from "react";
import { Button, Grid } from "@mui/material";

import BiddingDetails from "@/src/components/layouts/BiddingPage/BiddingDetails";
import ExpendedSiderBar from "@/src/components/layouts/BiddingPage/LeftSideBar/ExpendedSiderBar";
import RightSidebar from "@/src/components/layouts/BiddingPage/RightSidebar";
import { LIVE_BIDDING_DATA } from "../constents/Live-bidding/constents";
import CollapsedSideBar from "@/src/components/layouts/BiddingPage/LeftSideBar/CollapsedSideBar";

const page = () => {
  let fullWidth = "100%";
  let iconWidth = '60px';
  const [isCollapsed, setIsCollapsed] = useState(fullWidth);

  const collapsed = () => {
    setIsCollapsed((prevWidth) => (prevWidth === fullWidth ? iconWidth : fullWidth));
  };

  return (
    <>
      <Grid container spacing={2} >
        <Grid item lg={2} md={12} sm={12} xs={12} 
        // sx={{ backgroundColor: "#f8f8f8", mt:2.5 }}
        >
          <Button onClick={() => collapsed()}>isCollapsed</Button>
          {isCollapsed === fullWidth ? (
            <ExpendedSiderBar isCollapsed={isCollapsed} data={LIVE_BIDDING_DATA} />
          ) : (
            <CollapsedSideBar isCollapsed={isCollapsed} data={LIVE_BIDDING_DATA} />
          )}
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{mt:2}}>
          <BiddingDetails data={LIVE_BIDDING_DATA} />
        </Grid>
        <Grid item lg={2} md={12} sm={12} xs={12} sx={{ marginTop: "70px" }}>
          <RightSidebar data={LIVE_BIDDING_DATA} />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
