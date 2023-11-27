'use client';
import React from 'react';
import { Typography, Box, Switch, Divider } from '@mui/material';

const Notification = ({ notificationData, handleInputChange }) => {
  return (
    <>
      {notificationData?.map((item, index) => {
        return (
          <Box sx={{
            padding: '0px 10px 10px 10px'
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '2px solid #f4f5f7',
                gap: '10px',
                pb: 2
              }}
              key={index}
            >
              <Box
                sx={{
                  width: '100% !important',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </Typography>
                <Switch
                sx={{
                  marginRight: {lg: '-12px'}
                }}
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
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
export default Notification;
