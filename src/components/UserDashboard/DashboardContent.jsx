'use client'
import { Box } from '@mui/system';
import React from 'react';
import DashboardTitle from './DashboardTitle';
import { ALL_PROPOSALS, DASHBOARD_DATA } from '@/app/constants/Dashboard';
import { Button, Divider, FormGroup, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import DashboardProfile from './DashboardProfile';


const DashboardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '761px',
        background: '#fff',
        borderRadius: '10px',
        border: '1px solid #E4E4E4',
        // padding: 3,
        mt: 6,
      }}
    >
      <DashboardTitle title={ALL_PROPOSALS} />
      <Divider />
      <Grid container>
        <Grid item xs={8} sx={{ p: 4 }}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              id="location-search"
              variant="outlined"
              InputProps={{
                sx: {
                  height: '40px', // Adjust the height as needed
                  padding: '10px', // Adjust the padding as needed
                  borderRadius: '10px'
                },
              }}
              sx={{
                p: 2.5,
                width: '80%',
                // height: '10px',
                zIndex: 20,
                // fontSize: '5px',
                color: 'text.primary',
                borderRadius: '10px',
                backgroundColor: 'gray.50',
                borderRadius: '0 0.375rem 0.375rem 0',
                borderLeftColor: 'gray.50',
                '&:focus': {
                  ring: 'blue-500',
                  borderColor: 'blue-500',
                },
                dark: {
                  backgroundColor: 'gray.700',
                  borderLeftColor: 'gray.700',
                  borderColor: 'gray.600',
                  placeholder: 'gray.400',
                  color: 'white',
                  '&:focus': {
                    borderColor: 'blue-500',
                  },
                },
              }}
              placeholder="Search for city or address"
              required
            />
            <Box sx={{
              width: '40px',
              height: '40px',
              backgroundColor: '#126FAA',
              position: 'absolute',
              top: 20,
              right: 176,
              borderRadius: '0px 10px 10px 0'
            }}>

              <Image
                src={'/images/dashboard/search.svg'}
                width={25}
                height={25}
                alt='icon'
                sx={{ position: 'absolute', top: 30, background: 'blue', border: '1px solid red' }}
              />
            </Box>
            {/* <Button
              type="submit"
              // variant="contained"
              color="primary"
              sx={{
                position: 'absolute',
                top: 25,
                right: 180,
                // h: 30,
                // p: 2.5,
                fontSize: 'sm',
                fontWeight: 'medium',
                // borderRadius: '0 0.375rem 0.375rem 0',
                border: '1px solid',
                borderColor: 'blue',
                // backgroundColor: ''
                // backgroundColor: 'blue-700',
                // '&:hover': {
                //   backgroundColor: 'blue-800',
                // },
                // focus: {
                //   ring: 4,
                //   outline: 'none',
                //   ringColor: 'blue-300',
                // },
                // dark: {
                //   backgroundColor: 'blue-600',
                //   '&:hover': {
                //     backgroundColor: 'blue-700',
                //   },
                //   focus: {
                //     ringColor: 'blue-800',
                //   },
                // },
              }}
            >
              <SearchIcon sx={{ width: 30, height: 30 }} />
            </Button> */}
          </Box>
          <FormGroup row>
            <TextField
              variant="outlined"
              placeholder="username"
              InputProps={{
                sx: {
                  borderTopRight:0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: 0,
                },
              }}
            sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                marginRight: 0, // You can adjust the margin as needed
              }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                marginLeft: 0, // You can adjust the margin as needed
              }}
            >
              @example.com
            </Button>
          </FormGroup>

        </Grid>
        <Grid item xs={4} sx={{ p: 4 }}>
          <Button
            variant='outlined'
            sx={{
              width: '150px',
              height: '40px',
              flexShrink: 0,
              borderRadius: '50px',
              background: '#fff',
              // pr: 4
            }}>
            <Image
              src={'/images/dashboard/filter.svg'}
              width={20}
              height={20}
              sx={{
                mx: 2
              }}
            />
            filter
          </Button>
        </Grid>
      </Grid>
      <DashboardProfile
        Title={DASHBOARD_DATA.user.title}
        Location={DASHBOARD_DATA.user.location}
        Amount={DASHBOARD_DATA.user.amount}
        Description={DASHBOARD_DATA.user.description}

      />
    </Box>
  );
};

export default DashboardContent;
