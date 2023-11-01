import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import ListingInfo from './listinginfo';
import ReachBuyer from './ReachBuyer';

const BuyersPlatform = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            width: '90%',

            // width: { xs: "100%", sm: "700px", lg: "1200px" },
            gap: '6px',
            padding: { xs: '20px', md: '50px' },
            // justifyContent: "center",
          }}
        >
          <ReachBuyer />
          <ListingInfo />
        </Box>
      </Grid>
    </Grid>
  );
};
export default BuyersPlatform;
