import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { liveBiddingIcon } from "@/app/constents/Live-bidding/constents";

import LiveBiddingList from "./LiveBiddingList";

const LeftSideBar = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState("100%");
  const [isOpen, setIsOpen] = useState("");

  const collapsed = () => {
    setIsCollapsed("0%");
    setIsOpen("none");
  };
  return (
    <Box
      sx={{
        width: `${isCollapsed}`,
        display: `${isOpen}`,
        height: "100vh",
        backgroundColor: "#f8f8f8",
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
          <Button onClick={() => collapsed()}>isCollapsed</Button>
          <Box
            sx={{
              width: "98%",
              backgroundColor: "#FF631C33",
              borderRadius: "15px",
              display: "flex",
              padding: "10px",
              alignItems: "center",
            }}
          >
            {liveBiddingIcon}
            <Typography
              sx={{
                color: "#FB631C",
                fontSize: "16px",
                fontWeight: "500",
                px: "20px",
              }}
            >
              Live Bidding
            </Typography>
          </Box>
          <LiveBiddingList list={data.menuItems} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default LeftSideBar;
