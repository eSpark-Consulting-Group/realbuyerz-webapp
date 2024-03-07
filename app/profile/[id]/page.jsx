'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import RecentPropertyTitle from '@/src/components/AgentProfile/RecentPropertyTitle';
import AgentProperties from '@/src/components/AgentProfile/AgentProperties';
import AgentAbout from '@/src/components/AgentProfile/AgentProfileAbout';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import AgentSlider from '@/src/components/AgentProfile/PropertySlider';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';
import { USER_NOT_FOUND } from '@/app/constants/user';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

const AgentProfile = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const users = useSelector((state) => state?.agents);
  const user = users[id - 1];
  console.log(users);
  return (
    <>
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
            <AgentProperties
              data={user}
              allLink={`/profile/${id}/projects`}
              sellLink={`/profile/${id}/projects/sale`}
              rentLink={`/profile/${id}/projects/rent`}
            />
            <AgentAbout data={user} />
            <RecentPropertyTitle data={user} />
            <AgentSlider data={AGENT_PROFILE_DATA} />
          </>
        ) : (
          <NotFoundSection
            heading={'Sorry!'}
            message={
              'No Agent found, Please make sure to add  a valid agent ID.'
            }
          />
        )}
      </Box>
    </>
  );
};

export default AgentProfile;
