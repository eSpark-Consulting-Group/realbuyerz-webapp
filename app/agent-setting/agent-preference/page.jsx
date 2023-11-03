import React from "react";
import { Grid } from "@mui/material";

import PreferenceSetting from "@/src/components/AgentPreference/AgentSetting/PreferenceSetting";
const AgentPreferenceLayout = () => {
    return (
          <Grid
        container
        sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}
        >
              <Grid item xs={12} md={2} sx={{background:"gray"}}>
        xx
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            background:"#F4F5F7"
          }}
        >
         <PreferenceSetting/>
        </Grid>
            <Grid item xs={12} md={2} sx={{ background: "pink" }}>
        xx
        </Grid>
      </Grid>
    )
}
export default AgentPreferenceLayout;