'use client';
import React,{useState} from 'react';
import { Typography, Box, Grid } from '@mui/material';

import Notification from './Notification';
import { AGENT_PREFERENCES } from '@/app/constants/Preference';
import { PROPERTY_AREASIZE_AND_REPORT } from '@/app/constants/Preference';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';

const PreferenceSetting = () => {
      const [emailData, setEmailData] = useState(PROPERTY_AREASIZE_AND_REPORT.report);
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };
  const handleClick = () => {
    console.log("data",emailData)
    console.log("hello")
  }
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        md={10}
        sx={{
          backgroundImage: 'url("/images/RealBuyers.svg")',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70% 70%',   
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '1152px',
            justifyContent: 'center',
            margin: 0,
            border: '2px solid #F4F5F7',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: { xs: '170px', md: '250px' },
              width: { xs: '100%', md: '70%' },
              padding: '40px',
              gap: '40px',
            }}
          >
            <Typography
              sx={{
                color: 'black',
                fontSize: '25px',
                fontWeight: 500,
                padding:"8px"
              }}
            >
              {AGENT_PREFERENCES.heading.preference}
            </Typography>
            <Notification isNotifyEnable={AGENT_PREFERENCES.updates}
              Reports={PROPERTY_AREASIZE_AND_REPORT.report}
               InputChange={handleInputChange}
            />
            <AreaUnit Measure={AGENT_PREFERENCES.propertySize}
              Reports={PROPERTY_AREASIZE_AND_REPORT.report}
              InputChange={handleInputChange}
            />
            <SaveChanges handleClickBtn={handleClick}
                           

 />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PreferenceSetting;
