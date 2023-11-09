import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CollapsedLiveBiddingList from "./CollapsedLiveBiddingList";

const CollapsedSideBar = ({ menuItem, isCollapsed, isCollaps }) => {
  return (
    <Box
      style={{
        width: isCollapsed,
        height: "100%",
        borderRight : "2px solid #E4E4E4"
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          <ArrowForwardIosIcon
            fontSize="small"
            onClick={isCollaps}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        sx={{
          backgroundColor: "#fff",
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
              alt="icon"
            />
          </Box>
          <CollapsedLiveBiddingList list={menuItem} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CollapsedSideBar;
