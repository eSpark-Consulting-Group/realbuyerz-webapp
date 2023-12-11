'use client';
import React from 'react';
import { Box } from '@mui/system';

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import AgentAbout from '@/src/components/AgentProfile/AgentProfileAbout';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import AgentSlider from '@/src/components/AgentProfile/PropertySlider';
import RecentPropertyTitle from '@/src/components/AgentProfile/RecentPropertyTitle';
import AgentProperties from '@/src/components/AgentProfile/AgentProperties';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';
import { Typography } from '@mui/material';
import { USER_NOT_FOUND } from '@/app/constants/users';

const AgentProfile = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const users = useSelector((state) => state?.users?.users?.userdata);
  const user = users[id - 1];
  return (
    <Box
      sx={{
        mx: 'auto',
        mb: 16,
        mt: 4,
        width: '70vw',
      }}
    >
      {user ? (
        <>
          <AgentProfiles data={user} />
          <AgentProperties data={user} />
          <AgentAbout data={user} />
          <RecentPropertyTitle data={user} />
          <AgentSlider data={AGENT_PROFILE_DATA} />
        </>
      ) : (
        <Typography
          variant="h1"
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center  ',
          }}
        >
          {USER_NOT_FOUND}
        </Typography>
      )}
    </Box>
  );
};

export default AgentProfile;
