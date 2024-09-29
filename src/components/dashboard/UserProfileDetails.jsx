import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import UserProfileImage from './UserProfileImage';

const UserProfileDetails = ({
  Amount,
  text,
  link,
  image,
  adId,
  Description,
  amountCurrency,
  userPropertyId,
  agent_profile,
  userStatus,
}) => {
  return (
    <Grid container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'none' },
          padding: { xs: '-70px', md: '0px' },
        }}
      >
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={3.5}
          xs={12}
          sx={{
            display: 'flex',
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: 'center',
            },
          }}
        >
          <UserProfileImage
            badgeWidth={'13px'}
            badgeHeigth={'13px'}
            right={20}
            image={image || agent_profile?.profileImage}
            padding={0.5}
            width={165}
            height={156}
            isActive={false}
          />
        </Grid>
        <Box
          sx={{
            paddingLeft: { xs: '0px', md: '30px' },
            paddingTop: '25px',
            width: { xs: '100%', md: '200%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            '@media (min-width: 960px) and (max-width: 1250px)': {
              paddingLeft: '80px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#126FAA',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              py: 0.3,
            }}
          >
            {`${agent_profile?.firstName || ''} ${agent_profile?.lastName || ''}`}
          </Typography>
          <Typography
            sx={{
              color: '#757474',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {agent_profile?.country || ''}
          </Typography>
          <Typography
            sx={{
              color: '#000',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              py: 0.3,
            }}
          >
            {`${Amount || ''} ${amountCurrency || ''}`}
          </Typography>
          <br />
          <Typography
            sx={{
              width: { xs: '100%', md: '140%' },
              color: '#000',
              fontWeight: 300,
              fontSize: { xs: '15px', lg: '15.2px' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {Description || ''}
          </Typography>
        </Box>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '200px',
            height: '42px',
            borderRadius: '50px',
            color: 'gray',
            '@media (max-width: 400px)': {
              mb: '15px',
            },
          }}
        >
          {userStatus.toUpperCase()}
        </Typography>
        <Grid
          item
          sm={8}
          md={8}
          lg={12}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: {
              sm: 'flex-end',
            },
            alignItems: 'center',
            mt: { xs: 4, lg: 0 },
            mb: { xs: 0, md: 17 },
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: 'center',
            },
          }}
        >
          <Link href={`${userPropertyId || ''}/${link || ''}/${adId || ''}`}>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '200px',
                height: '42px',
                borderRadius: '50px',
                background: '#FB631C',
                border: '1px solid #FB631C',
                color: '#fff',
                cursor: 'pointer',
                '@media (max-width: 400px)': {
                  mb: '15px',
                },
              }}
            >
              {text || ''}
            </Typography>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};

export default UserProfileDetails;
