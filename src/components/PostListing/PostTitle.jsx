import React from 'react';
import { Typography, Box } from '@mui/material';

const PostTitle = ({ text }) => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #E4E4E4',
        padding: '15px',
      }}
    >
      <Typography
        sx={{
          color: '#126FAA',
          fontSize: '25px',

          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default PostTitle;
