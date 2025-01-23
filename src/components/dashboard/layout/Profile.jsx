import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Profile = ({ defaultImage, userProfile }) => {
  return (
    <>
      <Grid
        container
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
            src={userProfile?.profileImage || defaultImage}
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
          <Link href={`/agent/agent-settings/agent-profile`}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
                color: '#444444',
              }}
            >
              {`${userProfile?.firstName} ${userProfile?.lastName} `}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link href={`/agent/agent-settings/agent-profile`}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                marginTop: '-9px',
              }}
            >
              {userProfile.estateName || ''}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
