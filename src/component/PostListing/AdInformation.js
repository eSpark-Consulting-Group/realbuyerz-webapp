import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import PropertyAddInformation from './PropertyAddInformation';

const AdInformation = () => {
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
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '90%',
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.adInfo} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '80%', md: '600px' },
              padding: { xs: '20px', md: '50px' },
              backgroundImage: 'url("/assets/images/realbuyer.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
              marginTop: { xs: '10px', md: '0' },
            }}
          >
            <PropertyAddInformation PropertyInformation={PropertyInformation.addInfo} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
