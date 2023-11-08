import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Image from "next/image";
import ExpendedLiveBiddingList from "./ExpendedLiveBiddingList";

const ExpendedSiderBar = ({ data, isCollapsed, isExpended }) => {
  return (
    <Box
      sx={{
        width: isCollapsed,
        height: "100%",
        transition: 'width 1.3s ease',
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        sx={{
          backgroundColor: "#f8f8f8",
          width: "100vw",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "15px",
            borderRadius: 15,
            height: "100%", 
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box sx={{
              position: "absolute",
              right: 0
            }}>
             <ArrowBackIosNewIcon onClick={isExpended} fontSize="small" sx={{ cursor: "pointer"}}/>
            </Box>
          </Box>
          <Box
            sx={{
              width: "200px",
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
          <ExpendedLiveBiddingList list={data.menuItems} />
          
        </Grid>
      </Grid>
    </Box>
  );
};
export default ExpendedSiderBar;
