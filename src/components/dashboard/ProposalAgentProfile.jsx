import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';

import UserProfileDetails from './UserProfileDetails';

const ProposalAgentProfile = ({
  proposalData,
  ViewText,
  ViewLink,
  Height,
  image,
}) => {
  return (
    <Box className="scrollable" sx={{ maxHeight: Height }}>
      <>
        {proposalData?.map(({ agentProperty, userPropertyId }, index) => (
          <Box key={index}>
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
                    height: { xs: '550px', md: '180px' },
                    marginTop: '15px',
                    '@media (min-width: 960px) and (max-width: 1185px)': {
                      mb: '15px',
                    },
                  }}
                >
                  <UserProfileDetails
                    adId={agentProperty?.property_id}
                    text={ViewText}
                    link={ViewLink}
                    Title={agentProperty?.title}
                    image={image}
                    Amount={agentProperty?.amount}
                    amountCurrency={agentProperty?.amountCurrency}
                    Location={agentProperty?.location}
                    Description={agentProperty?.description}
                    agentId={agentProperty?.agent_id}
                    userPropertyId={userPropertyId}
                    agent_profile={agentProperty?.user}
                  />
                </Grid>
              </Grid>
            </Box>
            {index == proposalData.length - 1 ? null : <Divider />}
          </Box>
        ))}
      </>
    </Box>
  );
};

export default ProposalAgentProfile;
