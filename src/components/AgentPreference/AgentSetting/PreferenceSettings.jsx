'use client';
import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';

import Notification from './Notification';
import { AGENT_PREFERENCES } from '@/app/constants/Preference';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';
import { createInitialState } from '@/utils/agentPreferenceState';
import { savePreferenceData } from '@/src/redux/slices/preference/preferenceSlice';
import { useDispatch } from 'react-redux';

const PreferenceSettings = () => {
  const [formData, setFormData] = useState(createInitialState);
  const dispatch = useDispatch();
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
    setFormData((prevData) => {
      return {
        ...prevData,
        toggleData: prevData.toggleData.map((item) =>
          item.label === name ? { ...item, value: checked } : item
        ),
        emailData: { ...prevData.emailData, [name]: checked },
      };
    });
  };

  const handleClick = () => {
    dispatch({
      type: savePreferenceData,
      payload: {
        emailData: formData.emailData,
      },
    });
    console.log('tests', formData);
  };

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
        sx={{
          background: 'white',
          border: '1px #E4E4E4 solid',
          borderRadius: '10px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '1152px',
            justifyContent: 'center',
            margin: 0,
            backgroundImage: 'url("/images/RealBuyers.svg")',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '68% 68%',
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
                padding: '8px',
              }}
            >
              {AGENT_PREFERENCES.heading}
            </Typography>
            <Notification
              notificationData={AGENT_PREFERENCES.updates}
              handleInputChange={handleInputChangeToggle}
            />
            <AreaUnit
              measure={AGENT_PREFERENCES.propertySize}
              handleInputChange={handleInputChange}
            />
            <SaveChanges
              handleClickButton={handleClick}
              saveChangeButton={AGENT_PREFERENCES.saveChanges}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PreferenceSettings;
