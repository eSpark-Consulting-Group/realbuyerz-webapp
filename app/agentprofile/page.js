"use client"
import AgentAbout from "@/src/components/AgentProfile/AgentProfileAbout";
import AgentProfileState from "@/src/components/AgentProfile/AgentProfileState";
import AgentProfiles from "@/src/components/AgentProfile/AgentProfiles";
import MyCarousel from "@/src/components/AgentProfile/mySlide";

import { Typography } from "@mui/material";
import React from "react";
import { agentProfileDetails, info } from "../constents/AgentProfileConstant";

const AgentProfile = () => {
  return (
    <>
      <div className="w-[70vw] mx-auto mt-4">
        {agentProfileDetails.map((item) => {
          return (
          <>
            <AgentProfiles
              title={item.title}
              location={item.location}
              NoOfSales={item.numberOfSale}
              NoOfRent={item.numberOfRent}
              buttonTitle={item.buttonTitle}
              salesIcon={item.salesIcon}
              rentIcon={item.rentIcon}
              locationIcon={item.locationIcon}
            />
          </>
          );
        })}
        <AgentProfileState />
        <AgentAbout about={info} />
        <Typography
          variant="h4"
          align="center"
          color="textPrimary" // Change to the appropriate text color
          className="font-semibold font-['Inter']"
          marginBottom="30px"
        >
          Recent Properties By Arman Khan
        </Typography>
         <MyCarousel />
      </div>
    </>
  );
};

export default AgentProfile;
