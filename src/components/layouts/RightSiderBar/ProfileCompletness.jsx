import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import {
  PROFILE_COMPLETNESS,
  PROFILE_COMPLETNESS_DESCRIPTION,
} from '@/app/constants/LiveBidding';

const ProfileCompletness = ({ profileInfo }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#FB631C' : '#308fe8',
    },
  }));

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#EDF7FF',
        }}
      >
        <Box></Box>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '600',
            paddingLeft: '30px',
            paddingTop: '20px',
          }}
        >
          {PROFILE_COMPLETNESS}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '30px',
            paddingBottom: '15px',
          }}
        >
          <BorderLinearProgress
            variant="determinate"
            value={90}
            sx={{ flex: 1 }}
          />
          <Typography sx={{ ml: 1, mr: 5 }}>
            {profileInfo.profileCompleteness}%
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '0px',
            border: '1px solid #E5E5E5',
          }}
        ></Box>
        <Typography
          variant="body2"
          sx={{
            width: '80%',
            color: '#000',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            padding: '20px 20px 50px 30px',
          }}
        >
          {PROFILE_COMPLETNESS_DESCRIPTION}
        </Typography>
      </Grid>
    </>
  );
};

export default ProfileCompletness;
