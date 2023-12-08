import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

import { PROPERTIES_FOR_SALE, VIEW_BUTTON } from '@/app/constants/AgentProfile';

const PropertyForSale = ({ sellCount }) => {
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
              src="/images/agent-profile-icons/home.svg"
              width={15}
              height={15}
              alt="home-icon"
            />
            <Typography
              variant="body2"
              sx={{
                color: '#333',

                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                ml: 1,
              }}
            >
              {`${sellCount?.total} ${PROPERTIES_FOR_SALE}`}
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
                color: '#FB631C',

                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {VIEW_BUTTON} &nbsp;
            </Typography>
            <Image
              src="/images/agent-profile-icons/arrow.svg"
              width={9}
              height={9}
              alt="arrow-icon"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyForSale;
