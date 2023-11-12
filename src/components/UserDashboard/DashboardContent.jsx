'use client';
import { Box } from '@mui/system';
import React from 'react';
import DashboardTitle from './DashboardTitle';
import { ALL_PROPOSALS, DASHBOARD_DATA } from '@/app/constants/Dashboard';
import { Button, Divider, FormGroup, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import DashboardProfile from './DashboardProfile';

const DashboardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '761px',
        background: '#fff',
        borderRadius: '10px',
        border: '1px solid #E4E4E4',
        // padding: 3,
        mt: 6,
        mb: 6,
      }}
    >
      <DashboardTitle title={ALL_PROPOSALS} />
      <Divider />
      <Grid container>
        <Grid item xs={8} sx={{ padding: '40px 40px  40px 50px' }}>
          <FormGroup sx={{ position: 'relative' }}>
            <TextField
              variant="outlined"
              placeholder="Search by name"
              InputProps={{
                sx: {
                  height: '40px',
                  padding: '10px',
                  borderRadius: '10px',
                  paddingRight: '0',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                  },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderRadius: '0 10px 10px 0',
                width: '40px',
                height: '40px',
                backgroundColor: '#126FAA !important',
                '&:hover': {
                  backgroundColor: 'none',
                  boxShadow: 'none',
                },
                boxShadow: 'none',
              }}
            >
              <Image
                src={'/images/dashboard/search.svg'}
                width={25}
                height={25}
                alt="icon"
              />
            </Button>
          </FormGroup>
        </Grid>

        <Grid item xs={4} sx={{ padding: '40px 0px  40px 110px' }}>
          <Button
            variant="outlined"
            sx={{
              width: '150px',
              height: '40px',
              flexShrink: 0,
              borderRadius: '50px',
              background: '#fff',
              // pr: 4
            }}
          >
            <Image
              src={'/images/dashboard/filter.svg'}
              width={20}
              height={20}
              alt="filter-icon"
              sx={{
                mx: 2,
              }}
            />
            filter
          </Button>
        </Grid>
      </Grid>
      <DashboardProfile DASHBOARD_DATA={DASHBOARD_DATA} />
    </Box>
  );
};

export default DashboardContent;
