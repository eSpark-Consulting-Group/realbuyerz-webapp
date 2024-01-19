import React from 'react';
import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';

import { DASHBOARD, POST_A_REQUEST } from '@/app/constants/Dashboard';

const PostRequestButton = () => {
  return (
    <Box
      sx={{
        mx: { xs: 'auto', lg: 0 },
        width: { xs: '100%', lg: '1200px' },
        '@media (min-width: 1440px) and (max-width: 1568px)': {
          width: '100%',
        },
        '@media (min-width: 960px) and (max-width: 1439px)': {
          width: '90%',
        },
      }}
    >
      <Grid container>
        <Grid items xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '30px',
              lineHeight: '36.31px',
              ml: { xs: 4 },
            }}
          >
            {DASHBOARD}
          </Typography>
        </Grid>
        <Grid
          items
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            textAlign: { sx: 'none', sm: 'end', md: 'end', lg: 'end' },
          }}
        >
          <Button
            variant="primary"
            sx={{
              width: '200px',
              height: '42px',
              borderRadius: '50px',
              border: '1px solid #FB631C',
              mt: { xs: 4, sm: 0 },
              ml: { xs: 4 },
            }}
          >
            {POST_A_REQUEST}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostRequestButton;
