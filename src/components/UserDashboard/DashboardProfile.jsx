import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Divider, Grid } from '@mui/material';

import UserProfileImage from './UserProfileImage';
import UserProfileDetails from './UserProfileDetails';
import { LOAD_MORE, SHOW_LESS } from '@/app/constants/LiveBidding';
import { ALL_PROPOSALS_DATA } from '@/app/constants/Dashboard';

const DashboardProfile = ({ proposalData }) => {
  const [showAllItems, setShowAllItems] = useState(ALL_PROPOSALS_DATA);

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };
  return (
    <>
      {proposalData.map((item, index) => (
        <>
          <Box
            key={index}
            sx={{
              padding: '44px 54px 44px 40px',
            }}
          >
            <Grid container>
              <Grid
                item
                xl={2}
                lg={3}
                md={5}
                sx={{
                  position: 'relative',
                  width: '156px',
                  height: '156px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <UserProfileImage image={item.image} />
              </Grid>
              <Grid
                item
                xl={10}
                lg={9}
                md={7}
                sx={{
                  pl: { sm: 0, md: 2 },
                }}
              >
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
         {!showAllItems && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              onClick={handleShowMoreClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {LOAD_MORE}
            </Button>
          </Box>
        )}
        {showAllItems && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              onClick={handleShowLessClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {SHOW_LESS}
            </Button>
          </Box>
        )}
    </>
  );
};

export default DashboardProfile;
