"use client"
import { Grid } from "@mui/material";

import BiddingDetails from "@/src/components/layouts/BiddingPage/BiddingDetails";
import RightSidebar from "@/src/components/layouts/BiddingPage/RightSidebar";
import { LIVE_BIDDING_DATA } from "../constents/Live-bidding/constant";
import LeftSideBar from "@/src/components/layouts/BiddingPage/LeftSideBar";

const page = () => {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item lg={2} md={12} sm={12} xs={12} >
          <LeftSideBar LiveBiddingData={LIVE_BIDDING_DATA} />
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
