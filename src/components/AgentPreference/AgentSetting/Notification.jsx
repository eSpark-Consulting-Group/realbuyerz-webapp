'use client';
import React, { useState } from 'react';
import { Typography, Box, Switch, Button } from '@mui/material';

const Notification = ({ isNotifyEnable ,inputChange}) => {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Box>
        {isNotifyEnable.map((item, index) => {
          return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid gray',
                gap: '10px',
                padding: '10px',
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
                <Switch
                value={item.value}
                onChange={(event) => inputChange(item.title, event.target.checked)}
                  {...label}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#666666',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default Notification;
