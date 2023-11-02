import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

const SliderCardLocation = () => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Image
            src="./images/agent-profile-icons/hub.svg"
            width={10}
            height={10}
            alt="hub rever"
          />
          <Typography
            variant="body2"
            sx={{
              color: '#909394',
              fontWeight: '300',
              fontFamily: 'Inter',
              fontSize: '15px',
              fontStyle: 'normal',
              ml: 1,
            }}
          >
            Hub River Road
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SliderCardLocation;
