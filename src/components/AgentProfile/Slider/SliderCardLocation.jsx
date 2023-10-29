import React from "react";
import { Grid, Typography } from "@mui/material";

import { locationsIcon } from "@/app/constents/AgentProfile";

const SliderCardLocation = ({ location }) => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Typography
          variant="body2"
          sx={{
            color: "#909394",
            fontWeight: "300",
            fontFamily: "Inter",
            fontSize: "15px",
            fontStyle: "normal",
          }}
        >
          {locationsIcon}
          Hub River Road
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SliderCardLocation;
