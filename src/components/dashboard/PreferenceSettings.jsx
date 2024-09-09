'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Notification from './Notification';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';
import { createInitialState } from '@/src/utils/agentPreferenceState';
import { AGENT_PREFERENCES } from '@/src/constants/Preference';
import { saveUserPreferences } from '@/src/utils/apis/userPreferences';
import { userProfile } from '@/src/utils/apis/auth/getProfile';

const PreferenceSettings = () => {
  const [formData, setFormData] = useState(createInitialState);

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileResponse = await userProfile(); // Fetch user profile
  
        if (profileResponse && profileResponse.success) {
          const userProfile = profileResponse.response.data;
  
          // Populate formData with the fetched preferences
          setFormData((prev) => ({
            ...prev,
            emailData: {
              emailNotification: userProfile.preferences.emailNotification,
              newsLetter: userProfile.preferences.newsLetter,
              automatedReport: userProfile.preferences.automatedReport,
              currencyUnit: userProfile.preferences.currency,
              areaUnit: userProfile.preferences.areaUnit,
            },
          }));
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
  
    fetchProfile();
  }, []); // Only runs once on mount
  
  // Handle input change for text fields
  const handleInputChange = (event, name) => {
    const { value } = event.target;

    if (name) {
      setFormData((prev) => ({
        ...prev,
        emailData: {
          ...prev.emailData,
          [name]: value,
        },
      }));
    }
  };

  // Handle input change for toggle fields (checkboxes)
  const handleInputChangeToggle = (name, checked) => {
    if (!name) {
      console.error('Toggle name is undefined');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      emailData: {
        ...prevData.emailData,
        [name]: checked,
      },
    }));
  };

  // Handle the click to save preferences
  const handleClick = async () => {
    if (!formData.emailData.currencyUnit || !formData.emailData.areaUnit) {
      console.error('Form data is incomplete!');
      return;
    }

    try {
      const response = await saveUserPreferences(formData);
      console.log('Preferences saved successfully', response);
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  return (
    <Grid
      container
      sx={{
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 0,
          backgroundImage: 'url("/images/RealBuyers.svg")',
          backgroundPosition: 'center 55%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: '70% 70%', md: '50% 50%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: { xs: '170px', md: '180px' },
            width: { xs: '100%', md: '70%' },
            padding: '40px',
            gap: '40px',
          }}
        >
          <Typography
            sx={{
              color: 'black',
              fontSize: { sm: '20px', lg: '25px' },
              fontWeight: 500,
              padding: '8px',
            }}
          >
            {AGENT_PREFERENCES?.heading}
          </Typography>
          <Notification
            notificationData={AGENT_PREFERENCES?.updates}
            handleInputChangeToggle={handleInputChangeToggle}
            formData={formData?.emailData}
          />
          <AreaUnit
            measure={AGENT_PREFERENCES?.propertySize}
            handleInputChange={handleInputChange}
            formData={formData?.emailData}
          />
          <SaveChanges
            handleClickButton={handleClick}
            saveChangeButton={AGENT_PREFERENCES?.saveChanges}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PreferenceSettings;

