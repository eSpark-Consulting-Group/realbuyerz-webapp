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
          padding: '20px',
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
              fontSize: '0.875rem',
              fontWeight: 'medium',
              textDecoration: 'underline',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {profileInfo.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
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
