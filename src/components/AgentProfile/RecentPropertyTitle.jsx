import React from 'react';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { RECENT_PROPERTIES } from '@/app/constants/AgentProfile';

const RecentPropertyTitle = ({ data }) => {
  const isMediumScreen = useMediaQuery('(max-width:750px)');
  const variant = isMediumScreen ? 'h5' : 'h4';
  return (
    <Typography
      variant={variant}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: '30px',
        fontStyle: 'normal',
        lineHeight: 'normal',
        color: '#333',
        marginBottom: '50px',
        mt: 2,
      }}
    >
      {`${RECENT_PROPERTIES} ${data?.contactInfo?.agentName}`}
    </Typography>
  );
};

export default RecentPropertyTitle;
