import React from 'react';
import { Box, Grid } from '@mui/material';

import { LETS_TALK } from '@/src/constants/AgentProfile';
import AgentProfileDetail from './Profile/AgentProfileDetail';
import AgentImage from './Profile/AgentImage';
import LetsTalk from './Profile/LetsTalk';
import { usePathname } from 'next/navigation';

const AgentProfiles = ({ data, setFieldValue, forRentCount, forSellCount }) => {
  const path = usePathname();
  const user_profile = 'user-profile';
  const agent_profile = 'agent-profile';
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
          display: { xs: 'block', sm: 'flex' },
          position: 'relative',
          padding: { xs: 2, sm: 0 },
          '@media (min-width: 280px) and (max-width: 319px)': {
            padding: 0,
          },
        }}
      >
        <AgentImage data={data} setFieldValue={setFieldValue} />
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
              data={data}
              path={path}
              user={user_profile}
              agent={agent_profile}
              forRentCount={forRentCount}
              forSellCount={forSellCount}
            />
            {path?.includes(user_profile) ||
            path?.includes(agent_profile) ? null : (
              <LetsTalk text={LETS_TALK} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AgentProfiles;
