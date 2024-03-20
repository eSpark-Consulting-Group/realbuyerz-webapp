'use client';
import React, { useState, useEffect } from 'react';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';

import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user_profile = useSelector((state) => state?.currentUser?.user);
  const [userData, setUserData] = useState(user_profile || {});
  console.log(user_profile, 'user_profile');
  useEffect(() => {
    setUserData(user_profile || {});
  }, [user_profile]);

  return (
    <Box
      sx={{
        background: '#fff',
        textAlign: { xs: 'center', sm: 'left' },
        mx: { xs: 'auto', lg: 0 },
        width: {
          lg: '1200px',
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        },
      }}
    >
      <ProfileForm formValues={userData} data={Agent_Profile_Form_Data} />
      <ProfileFormMidText />
      <ProfilePasswordForm
        spacificAgent={userData}
        data={Agent_Profile_Form_Data}
      />
    </Box>
  );
};

export default UserProfile;
