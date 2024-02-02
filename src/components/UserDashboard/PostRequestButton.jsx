import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import { DASHBOARD } from '@/app/constants/Dashboard';

const PostRequestButton = () => {
  return (
    <Box
      sx={{
        mx: { xs: 'auto', lg: 0 },
        maxWidth: '1200px',
      }}
    >
      <Grid container>
        <Grid items xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: { xs: '27px', sm: '30px' },
              lineHeight: '36.31px',
              ml: 1,
              '@media (max-width: 445px)': {
                textAlign: 'center',
              },
            }}
          >
            {DASHBOARD}
          </Typography>
        </Grid>
        {/* <Grid
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
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default PostRequestButton;
