import React from "react";
import {  Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import CollapsedLiveBiddingList from "./CollapsedLiveBiddingList";

const CollapsedSideBar = ({ data, isCollapsed }) => {
  return (
    <Box
    style={{
        width: isCollapsed,
        transition: 'width 1.3s ease',
      }}  
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        sx={{
          backgroundColor: "#f8f8f8",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "15px",
            borderRadius: 15,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FF631C33",
              borderRadius: "15px",
              display: "flex",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/Live-bidding-icons/liveBidding.svg"}
              width={30}
              height={30}
            />
          </Box>
          <CollapsedLiveBiddingList list={data.menuItems} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CollapsedSideBar;
