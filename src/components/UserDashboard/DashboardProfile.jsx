import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';

import UserProfileImage from './UserProfileImage';
import UserProfileDetails from './UserProfileDetails';

const DashboardProfile = ({ proposalData }) => {
  return (
    <>
      {proposalData.map((item, index) => (
        <>
          <Box
            key={index}
            sx={{
              padding: '44px 45px 44px 40px',
            }}
          >
            <Grid container>
              <Grid
                item
                xl={2}
                lg={3}
                md={5}
                sx={{ position: 'relative', width: '156px', height: '156px' }}
              >
                <UserProfileImage image={item.image} />
              </Grid>
              <Grid item xl={10} lg={9} md={7}>
                <UserProfileDetails
                  Title={item.title}
                  Location={item.location}
                  Amount={item.amount}
                  Description={item.description}
                />
              </Grid>
            </Grid>
          </Box>
          {index == proposalData.length - 1 ? null : <Divider />}
        </>
      ))}
    </>
  );
};

export default DashboardProfile;
