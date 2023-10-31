import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

// import { arrowIcon, salesIcon } from '@/app/constents/AgentProfile';

const PropertyForSale = ({ data }) => {
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              verticalAlign: 'baseline',
              marginBottom: 1,
            }}
          >
            <Image
              src="./images/agent-profile-icons/home.svg"
              style={{ display: 'inline' }}
              alt="home"
            />{' '}
            &nbsp;
            {`${data?.propertiesForSale.count} Properties For Sale`}
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              verticalAlign: 'baseline',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: 15,
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                color: 'orange',
              }}
            >
              View &nbsp;
            </Typography>
            <Image
              src="./images/agent-profile-icons/arrow.svg"
              width={9}
              height={9}
              alt="hub rever"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyForSale;
