'use client'
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import { AGENT_PREFERENCES } from '@/app/constants/Preference';

const AreaUnit = ({ Measure,Report,inputChange }) => {
    const [emailData, setEmailData] = useState(Report);
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEmailData({
  //     ...emailData,
  //     [name]: value,
  //   });
  // };
  // const handleClick = () => {
  //   console.log("data",emailData)
  // }
  return (
    <Box>
      {Measure.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            gap: '15px',
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
            {item.label}
          </Typography>
          <TextField
            placeholder={item.placeholder}
            // value={`${emailData.currency} ${emailData.areaUnit}`}
            name={item.name}
            variant="outlined"
            type="number"
            fullWidth
            onChange={inputChange}
          />
        </Box>
      ))}
{/* <Button onClick={handleClick}>Ok</Button> */}
    </Box>
  );
};
export default AreaUnit;
