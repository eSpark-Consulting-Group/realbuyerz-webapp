import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

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
      ><Link href={`/user/inbox/${data.id}`}>
        <Paper
          sx={{
            background: 'white',
            borderRadius: '47px',
            alignItems: 'center',
            alignContent: 'center',
            width: '91.93px',
            height: '35px',
            boxShadow: 2,
            padding: 2,
            marginLeft: { xs: 0, sm: 'auto' },
            paddingBottom: '10px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: '#126FAA',
              pb: '10px',
              marginTop: '-8px',
            }}
          >
            {text}
          </Typography>
        </Paper></Link>
      </Grid>
    )
  );
};

export default LetsTalk;
