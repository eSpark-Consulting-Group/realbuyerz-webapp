import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import UserProfileImage from './UserProfileImage';

const UserProfileDetails = ({
  Amount,
  text,
  link,
  adId,
  image,
  agentId,
  proposalId,
  Description,
  amountCurrency,
}) => {
  const loginAgents = useSelector((state) => state?.loginAgents);
  const findAgent = loginAgents?.find(
    (agent) => agent?.id == agentId && agentId
  );
  console.log(findAgent, 'loginAgents');

  return (
    <Grid container>
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        sm={3.5}
        xs={12}
        sx={{
          position: 'relative',
          width: '156px',
          height: '156px',
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
          image={findAgent?.profileImage || image}
          padding={0.5}
          width={165}
          height={156}
          isActive={findAgent?.status == 'Active' ? true : false}
        />
      </Grid>
      <Grid
        item
        sm={4}
        md={3}
        lg={3}
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          my: { xs: '20px', md: '0px' },
          ml: { md: '6px', lg: '0px' },
          justifyContent: {
            lg: 'flex-start',
          },
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              width: '100px',
              color: '#126FAA',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              py: 0.3,
            }}
          >
            {findAgent?.firstName + findAgent?.lastName || ''}
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
            {findAgent?.country || ''}
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
        </Box>
      </Grid>
      <Grid
        item
        sm={8}
        md={8}
        lg={9}
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: {
            sm: 'flex-end',
          },
          alignItems: 'center',
          mt: { md: 4, lg: 0 },
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Link href={`${adId}/${link}/${proposalId}`}>
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
            }}
          >
            {text}
          </Typography>
        </Link>
      </Grid>
      <Box
        sx={{
          mt: 4.7,
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontWeight: 300,
            fontSize: { xs: '15px', lg: '15.2px' },
            lineHeight: '18.15px',
            wordSpacing: '1px',
            '@media(min-width: 280px) and (max-width: 445px)': {
              textAlign: 'center',
            },
          }}
        >
          {Description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default UserProfileDetails;
