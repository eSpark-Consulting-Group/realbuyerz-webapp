import React from "react";
import { Grid, Typography } from "@mui/material";

import { arrowIcon, salesIcon } from "@/app/constents/AgentProfile";

const PropertyForRent = ({ data }) => {
  return (
    <div>
      <Grid container justifyContent="space-between" >
        <Grid item>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "normal",
              display: "flex",
              alignItems: "center",
              color: "#333",
              paddingBottom: 1,
            }}
          >
              {salesIcon}{`${data.propertiesForRent.count} Properties For Rent`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "normal",
              display: "flex",
              alignItems: "center",
              color: "orange",
            }}
          >
            View
            {arrowIcon}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyForRent;
