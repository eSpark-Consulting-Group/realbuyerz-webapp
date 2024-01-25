import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

const Profile = ({ profileInfo }) => {
  return (
    <>
      <Grid
        spacing={2}
        sx={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Grid item xs={12}>
          <Avatar
            src={profileInfo.image}
            sx={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '5px auto',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              textDecoration: 'underline',
            }}
          >
            {profileInfo.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            {profileInfo.agencyName}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
