import { VIEW_BUTTON } from '@/app/constants/Dashboard';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const UserProfileDetails = ({ Title, Location, Amount, Description }) => {
  return (
    <Grid container>
      <Grid
        item
        md={3}
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          my: { xs: '20px', md: '0px' },
          ml: { md: '6px', lg: '0px' },
          justifyContent: {
            lg: 'flex-start',
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              width: '100px',
              color: '#126FAA',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              py: 0.3,
            }}
          >
            {Title}
          </Typography>
          <Typography
            sx={{
              color: '#757474',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {Location}
          </Typography>
          <Typography
            sx={{
              color: '#000',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              py: 0.3,
            }}
          >
            {Amount}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={9}
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: {
            lg: 'flex-end',
          },
          alignItems: 'center',
        }}
      >
        <Button
          variant="primary"
          sx={{
            width: '200px',
            height: '42px',
            borderRadius: '50px',
            border: '1px solid #FB631C',
          }}
        >
          {VIEW_BUTTON}
        </Button>
      </Grid>
      <Box
        sx={{
          mt: 4.7,
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: '18.15px',
          }}
        >
          {Description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default UserProfileDetails;
