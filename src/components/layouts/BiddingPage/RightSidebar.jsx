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
  const icons = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      // {...props}
    >
      <circle cx="15" cy="15" r="14.5" fill="white" stroke="#E7E7E7" />
      <path
        d="M7 19.7409V23H10.2591L19.8713 13.3878L16.6122 10.1287L7 19.7409ZM23 10.2591L19.7409 7L17.5421 9.2075L20.8012 12.4666L23 10.2591Z"
        fill="#FB631C"
      />
    </svg>
  );
  const myCategory = [
    {
      mainTitle: "My Categories",
      icons: icons,
    },
    {
      categoryTyes: "House",
    },
    {
      categoryTyes: "Plots",
    },
    {
      categoryTyes: "Commercials",
    },
  ];
  const liveBiddingProposals = [
    {
      proposalTitle: "Proposals:",
      proposal: "My Proposals",
    },
  ];
  const liveBiddingPropertyList = [
    {
      proprtyTitle: "Property Listed",
      propertyType: "50 property listed",
      icons: icons,
    },
    {
      proprtyTitle: "Profile Visibilty",
      propertyType: "Public",
    },
    {
      proprtyTitle: "Lead Preferences",
      propertyType: "Open to contract",
    },
  ];
  const profileData = [
    {
      image: "./images/Live-bidding-icons/Profile.png/",
      name: "Kashif Z",
      stateName: "KZ Real Estate",
    },
  ];

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
          <PropertyList data={data.profileInfo.propertyListed} />
          <CustomDivider />
          <Cateogries data={data.profileInfo.categories} />
        </Grid>
        <Grid xs={12} item sx={{
          marginRight: "5px"
        }}>
          <Proposals data={liveBiddingProposals} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RightSidebar;
