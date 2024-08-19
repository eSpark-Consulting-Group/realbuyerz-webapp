import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const LetsTalk = ({ text, data }) => {
  return (
    text && (
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          paddingRight: '10px',
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
      </Grid>
    )
  );
};

export default LetsTalk;
