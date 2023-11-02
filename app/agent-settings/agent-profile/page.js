'use client';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

const AgentProfile = () => {
  return (
    <Box>
      <Grid
        container
        xs={11}
        md={9}
        item
        sx={{
          mx: 'auto',
          display: 'block',
          border: '2px solid #E4E4E4',
          my: 10,
        }}
      >
        <AgentProfiles data={AGENT_PROFILE_DATA} />
        <ProfileForm data={Agent_Profile_Form_Data} />
        <ProfileFormMidText />
        <ProfilePasswordForm data={Agent_Profile_Form_Data} />
      </Grid>
    </Box>
  );
};

export default AgentProfile;
