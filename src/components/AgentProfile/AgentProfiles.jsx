import React from 'react';
import { Box, Grid } from '@mui/material';

import { LETS_TALK, USER_TYPE } from '@/app/constants/AgentProfile';
import AgentProfileDetail from './Profile/AgentProfileDetail';
import AgentImage from './Profile/AgentImage';
import LetsTalk from './Profile/LetsTalk';

const AgentProfiles = ({ data, spacificData }) => {
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
        item
        sx={{
          display: { xs: 'block', sm: 'flex' },
          position: 'relative',
          padding: { xs: 2, sm: 0 },
          '@media (min-width: 280px) and (max-width: 319px)': {
            padding: 0,
          },
        }}
      >
        <AgentImage spacificData={spacificData} />
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
            <AgentProfileDetail
              description={data}
              spacificData={spacificData}
            />
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
