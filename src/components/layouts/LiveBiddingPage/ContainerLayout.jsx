import { Grid } from "@mui/material";
import React from "react";
import BiddingDetails from "./BiddingDetails";

const ContainerLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ backgroundColor: 'red' }}>
        {/* Content for the first Grid item */}
      </Grid>
      <Grid item xs={3} style={{ backgroundColor: 'blue' }}>
        {/* Content for the second Grid item */}
      </Grid>
      <Grid item xs={6} style={{ backgroundColor: 'green' }}>
        {/* Content for the third Grid item */}
      </Grid>


      <Grid item xs={2} sx={{ backgroundColor: 'yellow', height: "100vh"}}>
        {/* Content for the first Grid item */}
      </Grid>
      <Grid item xs={8} sx={{ backgroundColor: 'purple' }}>
            <BiddingDetails />
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: 'pink' }}>
        {/* Content for the third Grid item */}
      </Grid>
    </Grid>
  );
};

export default ContainerLayout;
