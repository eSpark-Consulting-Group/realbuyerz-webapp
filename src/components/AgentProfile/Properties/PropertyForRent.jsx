import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTIES_FOR_RENT, VIEW_BUTTON } from '@/app/constants/AgentProfile';

const PropertyForRent = ({ data, handleView }) => {
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
              alt="Home-icon"
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
              {`${data?.propertiesForSale.count} ${PROPERTIES_FOR_RENT}`}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Button
              variant="body2"
              sx={{
                color: '#FB631C',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
              onClick={handleView}
            >
              {VIEW_BUTTON} &nbsp;
              <Image
                src="/images/agent-profile-icons/arrow.svg"
                width={9}
                height={9}
                alt="arrow-icon"
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyForRent;
