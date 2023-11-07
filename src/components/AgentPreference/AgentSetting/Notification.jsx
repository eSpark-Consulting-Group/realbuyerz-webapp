'use client';
import React,{useState} from 'react';
import { Typography, Box, Switch, Button } from '@mui/material';

import { AGENT_PREFERENCES } from '@/app/constants/Preference';

const Notification = ({ isNotifyEnable,Reports, InputChange }) => {
  const [emailData, setEmailData] = useState(Reports);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value

    });
  };
//  const notificationemail = Object.fromEntries(
//     Reports.map((field) => [field.name, ''])
//   );
  // console.log("hhshs", notificationemail)
    // console.log("email",emailData)

 
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Box>
        {isNotifyEnable.map((item, index) => {
          // const {
          //   name,
          //   value
          // } = item;
          return (
             <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid gray',
              gap: '10px',
              padding: "10px"
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
                // value={emailData.}
                // name={Reports[]}
                onChange={InputChange}
                {...label} />
            </Box>
            <Box>
              <Typography sx={{
                color: '#666666',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: 400,
              }}>{item.description}</Typography>
            </Box>
          </Box>
          )
         
        })}
      </Box>
    </>
  );
};
export default Notification;