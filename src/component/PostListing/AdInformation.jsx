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
          backgroundImage: 'url("/assets/images/realbuyer.svg")',
          backgroundSize: '70% 70%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '90%',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.adInfo} />
          <PropertyAddInformation
            PropertyInformation={PropertyInformation.addInfo}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
