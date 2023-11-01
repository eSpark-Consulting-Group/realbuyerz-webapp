"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cateogries from "./RightSiderBar/Cateogries";
import Proposals from "./RightSiderBar/Proposals";
import PropertyList from "./RightSiderBar/PropertyList";
import Profile from "./RightSiderBar/Profile";
import ProfileCompletnes from "./RightSiderBar/ProfileCompletnes";
import AvailableConnects from "./RightSiderBar/AvailableConnects";
import CustomDivider from "./RightSiderBar/CustomDivider";

const RightSidebar = ({data}) => {
  return (
    <React.Fragment>
      <Grid container  rowSpacing={1}>
        <Grid
          border={2}
          item
          sx={{
            border: "1px solid #E4E4E4",
            borderRadius: "10px",
            background: "#F FF",
            width: "100%",
            height: "100%",
            marginRight: "5px",
          }}
        >
          <Profile data={data.profileInfo} />
          <ProfileCompletnes data={data.profileInfo} />
          <AvailableConnects data={data.profileInfo} />
          <CustomDivider />
          <PropertyList data={data.profileInfo} />
          <CustomDivider />
          <Cateogries data={data.profileInfo.categories} />
        </Grid>
        <Grid xs={12} item sx={{
          marginRight: "5px"
        }}>
          <Proposals data={data.profileInfo.proposal} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RightSidebar;
