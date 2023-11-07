import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Grid, Typography, Button } from '@mui/material';
import ProposalSlider from './ProposalSlider';

function ProposalMedia({ media, mediaType }) {
  return (
    <>
      <Grid container>
        <Grid item xs={6} gap={'26px'} sx={{ p: '30px', display: 'flex' }}>
          <Typography
            variant="h2"
            sx={{
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '500',
            }}
          >{`Project videos`}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ p: '40px', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            sx={{
              mx: '4px',
              fontWeight: 600,
              width: '150px',
              height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
              color: '#FB631C',
              '&:hover': {
                color: '#fff',
              },
              borderRadius: '50px',
            }}
            variant="outlined"
          >
            View All
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', gap: 'auto' }}>
        <ProposalSlider data={media} sldierType={mediaType} />
      </Grid>
    </>
  );
}

export default ProposalMedia;
