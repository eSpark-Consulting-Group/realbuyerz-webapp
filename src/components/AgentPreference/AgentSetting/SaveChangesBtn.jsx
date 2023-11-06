import React from 'react';
import { Box, Button } from '@mui/material';

const SaveChanges = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#FB631C',
        width: '160px',
        height: '44px',
        justifyContent: 'center',
        marginLeft: '11px',
      }}
    >
      <Button
        sx={{
          color: 'white',
          fontSize: '15px',
          fontFamily: 'Inter',
          fontWeight: 400,
        }}
      >
        Save Changes
      </Button>
    </Box>
  );
};
export default SaveChanges;
