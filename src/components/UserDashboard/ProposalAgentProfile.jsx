import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Divider, Grid } from '@mui/material';

import UserProfileDetails from './UserProfileDetails';
import { LOAD_MORE, SHOW_LESS } from '@/app/constants/LiveBidding';

const ProposalAgentProfile = ({
  proposalData,
  ViewText,
  ViewLink,
  Height,
  image,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <Box className="scrollable" sx={{ height: Height }}>
      <>
        {proposalData
          ?.slice(0, showAllItems ? proposalData?.length : 2)
          .map((item, index) => (
            <>
              <Box
                key={index}
                sx={{
                  padding: '44px 54px 44px 54px',
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    sx={{
                      height: { xs: '550px', md: '200px' },
                      marginTop: '15px',
                    }}
                  >
                    <UserProfileDetails
                      adId={item?.adId}
                      text={ViewText}
                      link={ViewLink}
                      Title={item?.title}
                      image={image}
                      Amount={item?.amount}
                      amountCurrency={item?.amountCurrency}
                      Location={item?.location}
                      Description={item?.description}
                      proposalId={item?.proposalId}
                      agentId={item?.agentId}
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
    </Box>
  );
};

export default ProposalAgentProfile;
