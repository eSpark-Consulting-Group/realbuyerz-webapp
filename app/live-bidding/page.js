"use client"
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        >
          <Box sx={{ position: 'relative' }}>
            <Box sx={{
              position: "absolute",
              right: 0
            }}>
            </Box>
          </Box>

          {isCollapsed === fullWidth ? (
            <ExpendedSiderBar isCollapsed={isCollapsed} data={LIVE_BIDDING_DATA} isExpended= {collapsed}/>
          ) : (
            <CollapsedSideBar isCollapsed={isCollapsed} data={LIVE_BIDDING_DATA}  isCollaps= {collapsed}/>
          )}
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
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
