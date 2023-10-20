import React from "react";
import { Box } from "@mui/material";
import PropertyHeader from "./PropertyCardHeader";
import PropertyCardBody from "./PropertyCardBody";
import { Properties } from "@/app/constents/AgentProfileConstant";
import AgentTitle from "./AgentTitle";

const AgentProfileState = ({
  saleTitle,
  rentTitle,
  view,
  PropertieName1,
  PropertieName2,
  PropertieName3,
  PropertyNumber1,
  PropertyNumber2,
  PropertyNumber3,
  items
}) => {
  return (
    <Box
      sx={{
        width: "440px",
        height: "325px",
        marginBottom: 10,
      }}
    >
      <Box sx={{ pt: 8 }}>
        <AgentTitle title={"Properties By Arman Khan"} />
        {/* <PropertyHeader
          saleTitle={saleTitle}
          rentTitle={rentTitle}
          view={view}
        />
        <PropertyCardBody 
        PropertieName1={PropertieName1}
        PropertieName2={PropertieName2}
        PropertieName3={PropertieName3}
        PropertyNumber1={PropertyNumber1}
        PropertyNumber2={PropertyNumber2}
        PropertyNumber3={PropertyNumber3}
        // items={items}
         /> */}
        {Properties.map((items, index) => (
          <Box key={index} sx={{ pt: 2 }}>
            <PropertyHeader title={items.title} view={items.view} />
            <PropertyCardBody items={items} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AgentProfileState;
