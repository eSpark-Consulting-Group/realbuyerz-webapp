import React from 'react';
import { Box } from '@mui/system';

const BackgroundImageBox = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/assets/images/realbuyer.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        padding: '50px',
      }}
    />
  );
};

export default BackgroundImageBox;
