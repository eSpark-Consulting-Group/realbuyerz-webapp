'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Listing = () => {
  return (
    <Box sx={{ background: '#F4F5F7', borderRadius: '10px' }}>
      <Grid container borderBottom={'1px solid #E4E4E4'}>
        <Grid item xs={6} gap={'26px'} sx={{ p: '30px', display: 'flex' }}>
          <Box>
            <Avatar src={''} sx={{ width: 60, height: 60 }} />
          </Box>
          <Box>
            <Typography
              variant="primary"
              sx={{
                color: '#126FAA',
                fontSize: '15px',
                fontFamily: 'Inter',
                fontWeight: '500',
              }}
            >{`John Doe`}</Typography>
            <br />
            <LocationOnIcon />
            <Typography
              variant="secondary"
              sx={{
                color: '#757474',
                fontSize: '15px',
                fontFamily: 'Inter',
                fontWeight: '500',
              }}
            >
              {`city`}, {`country`} - {`3:16pm local time`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ p: '40px', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            sx={{
              mx: '4px',
              fontWeight: 600,
              width: '150px',
              height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
              color: '#fff',
              borderRadius: '50px',
            }}
            variant="outlined"
          >
            <Typography sx={{ color: '#fff' }}>Reject</Typography>
          </Button>
          <Button
            sx={{
              mx: '4px',
              fontWeight: 600,
              width: '150px',
              height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
              color: '#fff',
              borderRadius: '50px',
            }}
            variant="primary"
          >
            <Typography sx={{ color: '#fff' }}>Connect</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            p: '40px 40px 40px 20px',
            justifyContent: 'center',
            borderRight: '1px solid #E4E4E4',
          }}
        >
          <Typography variant="h6" sx={{ pb: '10px' }}>
            Applicant
          </Typography>
          <Typography variant="body1">
            Kashif has applied to or been invited to your or your company’s job
            need experience custom template designers for custom posts archive
            creation
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ p: '40px', justifyContent: 'center' }}>
          asda
        </Grid>
      </Grid>
    </Box>
  );
};
export default Listing;
