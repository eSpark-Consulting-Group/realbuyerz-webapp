import { Box } from '@mui/system';
import React from 'react';
import DashboardTitle from './DashboardTitle';
import { ALL_PROPOSALS } from '@/app/constants/Dashboard';
import { Button, Divider, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
        <Grid item xs={8} sx={{ border: '1px solid red', p: 4 }}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              id="location-search"
              variant="outlined"
              sx={{
                p: 2.5,
                width: '80%',
                zIndex: 20,
                fontSize: 'sm',
                color: 'text.primary',
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                // h: 30,
                // p: 2.5,
                fontSize: 'sm',
                fontWeight: 'medium',
                // borderRadius: '0 0.375rem 0.375rem 0',
                border: '1px solid',
                borderColor: 'blue-700',
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
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ border: '1px solid red', p: 4 }}>
          adfadfafadfasdf asdfasfdasdfasdf asdfasdfasdfasfa asdf
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
