import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { usePathname } from 'next/navigation';
import ProfileInfo from './ProfileInfo';
import {
  ALT,
  FOR_RENT,
  FOR_RENT_ICON,
  FOR_SALE,
  FOR_SALE_ICON,
  LOCATION_ICON,
} from '@/app/constants/AgentProfile';

const AgentProfileDetail = ({ description }) => {
  const currentPath = usePathname();
  return (
    <Grid
      item
      xs={11}
      sm={12}
      md={6}
      sx={{
        display: 'flex',
        width: '100%',
        mx: { xs: 'auto', sm: 0 },
        justifyContent: { xs: 'center', sm: 'start' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginLeft: { xs: 0, sm: '50px' },
          my: { xs: 2 },
          alignItems: { xs: 'center', sm: 'start' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: '#1176AD', mt: 2 }}
        >
          {description?.userName}
        </Typography>

        {currentPath === `/dashboard/agent-settings/agent-profile` ? (
          <ProfileInfo title={description?.email} />
        ) : (
          <>
            <ProfileInfo
              title={`${description?.country} ${description?.city}`}
              icon={LOCATION_ICON}
              alt={ALT}
            />
            <ProfileInfo
              title={`${description?.counts?.sellCount?.total} ${FOR_SALE}`}
              icon={FOR_SALE_ICON}
              alt={ALT}
            />
            <ProfileInfo
              title={`${description?.counts?.rentCount?.total} ${FOR_RENT}`}
              icon={FOR_RENT_ICON}
              alt={ALT}
            />
          </>
        )}
      </Box>
    </Grid>
  );
};

export default AgentProfileDetail;
