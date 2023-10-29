import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { locationIcon, rentIcon, salesIcon } from "@/app/constents/AgentProfile";


const AgentProfileDetails = ({data}) => {
  return (
    <Grid item xs={4} sx={{ display: "flex", width: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", color: "#1176AD", mt: 2 }}
        >
          {data.contactInfo.agentName}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#777777", fontWeight: "medium", marginTop: 1 }}
        >
          {locationIcon}Karachi Pakistan
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#777777", fontWeight: "medium", mt: 1, marginBottom: 0,}}
        >
          {salesIcon}{data.propertyDetails.propertiesForSale.count} For Sale
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#777777", fontWeight: "medium", mt: 1 }}
        >
          {rentIcon}{data.propertyDetails.propertiesForRent.count} For Rent
        </Typography>
      </Box>
    </Grid>
  );
};

export default AgentProfileDetails;
