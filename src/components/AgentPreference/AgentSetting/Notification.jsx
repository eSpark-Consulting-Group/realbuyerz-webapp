'use client';
import React from 'react';
import { Typography, Box, Switch } from '@mui/material';

const Notification = ({ notificationData, handleInputChange }) => {
  return (
    <>
      {notificationData?.map((item, index) => {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '2px solid #f4f5f7',
              gap: '10px',
              padding: '10px',
            }}
            key={index}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
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
                onChange={(event) =>
                  handleInputChange(item.label, event.target.checked)
                }
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
    </>
  );
};
export default Notification;
