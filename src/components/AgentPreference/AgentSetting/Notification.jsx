'use client';
import React from 'react';
import { Typography, Box, Switch } from '@mui/material';

const Notification = ({isNotifyEnable}) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Box>
        {isNotifyEnable.map((item, index) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid gray',
              gap: '10px',
              padding:"10px"
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
export default Notification;