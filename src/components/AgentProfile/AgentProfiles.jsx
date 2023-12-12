import React from 'react';
import { Box, Grid } from '@mui/material';

import { LETS_TALK, USER_TYPE } from '@/app/constants/AgentProfile';
import AgentProfileDetail from './Profile/AgentProfileDetail';
import AgentImage from './Profile/AgentImage';
import LetsTalk from './Profile/LetsTalk';

const AgentProfiles = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(75, 183, 255, 0.16) 0%, rgba(75, 183, 255, 0.04) 54.17%)',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          width: {
            xs: 'auto',
            sm: '160px',
            md: '165px',
            lg: '180px',
          },
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: {
            xs: '0',
            sm: '0 110px 110px 0',
            md: '0 100px 110px 0',
            lg: '0 90px 90px 0',
          },
        }}
      ></Box>
      <Box
        item
        sx={{
          display: { xs: 'block', sm: 'flex' },
          position: 'relative',
          padding: { xs: 2, sm: 0 },
        }}
      >
        <AgentImage image={data?.profileImage} />
        <Grid
          sx={{
            padding: 2,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              height: 'auto',
              width: '100%',
            }}
          >
            <AgentProfileDetail description={data} />
            {data?.userType === `${USER_TYPE.agent}` ? (
              <LetsTalk text={LETS_TALK} />
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AgentProfiles;
