'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Notification from './Notification';
import AreaUnit from './AreaUnit';
import SaveChanges from './SaveChangesBtn';
import { createInitialState } from '@/src/utils/agentPreferenceState';
import { savePreferenceData } from '@/src/redux/slices/users/usersSlice';
import { AGENT_PREFERENCES } from '@/src/constants/Preference';
import { ENDPOINTS } from '@/src/constants/apiConstants';

const PreferenceSettings = () => {
  const [formData, setFormData] = useState(createInitialState);
  const dispatch = useDispatch();
  const { token } = useAuth();
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      emailData: {
        ...prevData?.emailData,
        [name]: value,
      },
    }));
  };

  const handleInputChangeToggle = (name, checked) => {
    setFormData((prevData) => {
      return {
      ...prevData,
      toggleData: prevData?.toggleData?.map((item) =>
        item?.lable === name ? { ...item, value: checked } : item
      ),
      emailData: { ...prevData?.emailData, [name]: checked },
    };
    });
  };

  const handleClick = async () => {
    const {
      emailNotification,
      newsLetter,
      automatedReport,
      currency,
      areaUnit,
    } = formData?.emailData;

    try {
      const response = await axios.post(
        `${apiUrl}/${ENDPOINTS.preferences}`,
        {
          emailNotification,
          newsLetter,
          automatedReport,
          currency,
          areaUnit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        dispatch(
          savePreferenceData({
            emailNotification,
            areaUnit,
            currencyUnit: currency,
          })
        );
        console.log('Preferences saved successfully');
      } else {
        console.error(
          'Failed to save preferences:',
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error('API error while saving preferences:', error);
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
            handleInputChange={handleInputChangeToggle}
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
