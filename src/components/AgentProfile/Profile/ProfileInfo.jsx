import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ProfileInfo = ({ location, icon, alt, count }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ mr: 1, mt: 1 }}>
        <Image src={icon} width={15} height={15} alt={alt} />
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: '#777777',
          fontWeight: 'medium',
          marginTop: 1,
        }}
      >
        {count && `${count}`}
        {location && `${location}`}
      </Typography>
    </Box>
  );
};

export default ProfileInfo;
