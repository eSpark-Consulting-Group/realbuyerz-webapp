'use client';
import React from 'react';
import { Typography, Box, Switch } from '@mui/material';
import { NOTIFICATION } from '@/app/constants/Preference';

const NotificationEnable = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  console.log('notify', NOTIFICATION.notification);

  return (
    <>
      <Box>
        {NOTIFICATION?.notification.map((item, index) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid gray',
              padding: '15px',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',

                justifyContent: 'space-between',
              }}
              key={index}
            >
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '20px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                }}
              >
                {item.title}
              </Typography>
              <Switch {...label} />
            </Box>
            <Box>
              <Typography   sx={{
                  color: '#666666',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                }}>{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default NotificationEnable;
