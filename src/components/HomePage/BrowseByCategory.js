import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Heading from './Heading';

function BrowseByCategory({ data }) {
  return (
    <Container sx={{ pt: '90px', textAlign: 'center' }}>
      <Heading
        heading={'Browse By Category'}
        paragraph={
          'To browse & buy in your areas of interest. Look of properties by category'
        }
      />
      <Box sx={{ padding: '20px' }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          {data?.map((category) => (
            <Grid
              itme
              key={category?.id}
              sx={{
                p: '20px',
                mx: '15px',
                my: '15px',
                border: '2px solid #fb631c',
              }}>
              <a href='#'>
                <Box
                  sx={{
                    background: '#fff',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <img src={category?.image} alt={category?.name} />
                  <Typography variant='body1' sx={{ py: '8px' }}>
                    {category?.name}
                  </Typography>
                </Box>
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default BrowseByCategory;
