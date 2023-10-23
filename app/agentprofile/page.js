"use client"
import AgentAbout from "@/src/components/AgentProfile/AgentProfileAbout";
import AgentProfileState from "@/src/components/AgentProfile/AgentProfileState";
import AgentProfiles from "@/src/components/AgentProfile/AgentProfiles";
import AgentSlider from "@/src/components/AgentProfile/SlickSlider";
import React from "react";
import { RecentPropertie, SliderCardData, agentProfileDetails, info } from "../constents/AgentProfileConstant";
import RecentPropertyTitle from "@/src/components/AgentProfile/RecentPropertyTitle";

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
        <RecentPropertyTitle data={RecentPropertie} />
        <AgentSlider data={SliderCardData}/>
      </div>
    </>
  );
};

export default AgentProfile;
