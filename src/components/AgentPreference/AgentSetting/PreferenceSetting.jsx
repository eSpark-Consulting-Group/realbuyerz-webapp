'use client';
import React,{useState} from 'react';
import { Typography, Box, Grid } from '@mui/material';

import Notification from './Notification';
import { AGENT_PREFERENCES } from '@/app/constants/Preference';
import { PROPERTY_AREASIZE_AND_REPORT } from '@/app/constants/Preference';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';

const PreferenceSetting = () => {
  const [formData, setFormData] = useState({
    emailData: PROPERTY_AREASIZE_AND_REPORT.report.areaUnit,
    emailData: PROPERTY_AREASIZE_AND_REPORT.report.currency,
    toggleData: AGENT_PREFERENCES.updates,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      emailData: {
        ...prevData.emailData,
        [name]: value,
      },
    }));
  };
  const handleInputChangeToggle = (name, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      toggleData: prevData.toggleData.map((item) => {
        if (item.title === name) {
          return {
            ...item,
            value: checked,
          };
        }
        return item;
      }),
    }));
  };
  const handleClick = () => {
    console.log("data",formData)
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
               inputChange={handleInputChangeToggle}
            />
            <AreaUnit Measure={AGENT_PREFERENCES.propertySize}
              Reports={PROPERTY_AREASIZE_AND_REPORT.report}
              inputChange={handleInputChange}
            />
            <SaveChanges handleClickButton={handleClick}

 />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PreferenceSetting;
