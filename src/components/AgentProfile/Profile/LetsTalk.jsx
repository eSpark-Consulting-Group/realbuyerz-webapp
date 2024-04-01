import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

const LetsTalk = ({ text, link }) => {
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
        <Link href={link}>
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
              paddingtop: '10px',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                color: '#126FAA',
              }}
            >
              {text}
            </Typography>
          </Paper>
        </Link>
      </Grid>
    )
  );
};

export default LetsTalk;
