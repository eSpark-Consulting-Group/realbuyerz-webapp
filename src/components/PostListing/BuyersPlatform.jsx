import React from 'react';
import { Grid, Box } from '@mui/material';
import ListingInfo from './Listinginfo';
import ReachBuyer from './ReachBuyer';

import { PROPERTY_INFORMATION } from '@/app/constants/postListing';

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
            width: '100%',
            gap: '6px',
            padding: { xs: '20px', md: '50px' },
          }}
        >
          <ReachBuyer />
          <ListingInfo propertyInfo={PROPERTY_INFORMATION.property} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default BuyersPlatform;
