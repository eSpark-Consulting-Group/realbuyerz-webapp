import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const LetsTalk = ({ text, data }) => {
  return (
    text && (
      <Box
        sx={{
          width: { xs: '100%', sm: 'auto' },
          position: { xs: 'relative', md: 'absolute' },
          right: { md: 25 },
          left: { xs: 'auto', sm: 12, md: 'auto' },
          bottom: { xs: 'auto', md: 25 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          href={`/user/inbox/${data.id}`}
          sx={{
            padding: 2,
            height: '35px',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            borderRadius: '17px',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#fff',
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#126FAA',
            }}
          >
            {text}
          </Typography>
        </Button>
      </Box>
    )
  );
};

export default LetsTalk;
