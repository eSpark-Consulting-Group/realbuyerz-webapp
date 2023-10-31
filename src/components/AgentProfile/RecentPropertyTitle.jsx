import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const RecentPropertyTitle = ({ data }) => {
  const isMediumScreen = useMediaQuery('(max-width:750px)');
  const variant = isMediumScreen ? 'h5' : 'h4';
  return (
    <Typography
      variant={variant}
      align="center"
      fontWeight={600}
      marginBottom="50px"
    >
      Recent Properties By {data.contactInfo.agentName}
    </Typography>
  );
};

export default RecentPropertyTitle;
