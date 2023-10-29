import React from "react";
import { Grid, Typography } from "@mui/material";

import { arrowIcon, salesIcon } from "@/app/constents/AgentProfile";

const PropertyForSale = ({ data }) => {

  return (
    <>
      <Grid container justifyContent="space-between" >
        <Grid item>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "normal",
              display: "flex",
              alignItems: "center",
              textAlign:"center",
              color: "#333",
              paddingBottom: 1,
            }}
          >
           {salesIcon}
           {`${data.propertiesForSale.count} Properties For Sale`}
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
    </>
  );
};

export default PropertyForSale;
