import React from 'react';
import { Box } from '@mui/material';

const page = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            lg: '1200px',
            '@media (min-width: 1440px) and (max-width: 1568px)': {
              width: '100%',
            },
          },
        }}
      >
        hhhh
      </Box>
    </>
  );
};

export default page;
