import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import NotificationEnable from './NotificationEnable';
import { NOTIFICATION } from '@/app/constants/Preference';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';
const PreferenceSetting = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: 'skyblue',
            width: '1100px',
            height: '1152px',
          }}
        >
          <Box>
            <Typography
              sx={{ color: 'black', fontSize: '25px', fontWeight: 500 }}
            >
              {NOTIFICATION.Heading.preference}
            </Typography>
          </Box>
         <Box Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '80%', md: '830px' },
              padding: { xs: '20px', md: '50px' },
              backgroundImage: 'url("/images/RealBuyers.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              marginTop: { xs: '10px', md: '0' },
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
            }}
          >
          <NotificationEnable />
            <AreaUnit />
            </Box>
            <SaveChanges />
            
          {/* {NOTIFICATION.notification.map((item, index) => {
          <Box sx={{
            display: "flex",
              justifyContent: "space-between",
            
            
          }}
              key={index}
          > 
              <Typography>{ item.title}</Typography>
              <Typography>{item.description}</Typography>
      <Switch {...label} />

                </Box>
            })} */}
        </Box>
      </Grid>
    </Grid>
  );
};
export default PreferenceSetting;
