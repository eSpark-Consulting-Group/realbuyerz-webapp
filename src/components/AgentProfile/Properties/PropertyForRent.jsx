import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

// import { arrowIcon, salesIcon } from '@/app/constents/AgentProfile';

const PropertyForRent = ({ data }) => {
  return (
    <div>
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
              src="/images/agent-profile-icons/home.svg"
              width={15}
              height={15}
              alt="hub rever"
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: 15,
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                color: '#333',
                // paddingBottom: 1,
                ml: 1,
              }}
            >
              {`${data?.propertiesForRent.count} Properties For Rent`}
            </Typography>
          </Box>
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
              src="/images/agent-profile-icons/arrow.svg"
              width={9}
              height={9}
              alt="hub rever"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyForRent;
