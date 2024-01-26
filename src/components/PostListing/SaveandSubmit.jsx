import React from 'react';
import { Box, Button, Grid } from '@mui/material';

import HideUnhideButton from './HideButton';
import { PROPERTY_INFORMATION } from '@/app/constants/postListing';

const SubmitButton = ({ handleSubmitAd, handleClickOpen }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            '@media(min-width: 280px) and (max-width:319px)': {
              flexDirection: 'column',
            },
            alignItems: 'center',
            gap: '10px',
            width: '90%',
          }}
        >
          <HideUnhideButton handleClickOpen={handleClickOpen} />
          <Button
            sx={{
              width: { xs: '40%', sm: '200px' },
              '@media(min-width: 280px) and (max-width:319px)': {
                width: '100%',
              },
              borderRadius: '5px',
              border: '1px solid #FB631C',
              background: '#FFF',
              color: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: { xs: '12px', sm: '15px' },
              fontWeight: 400,
            }}
          >
            {PROPERTY_INFORMATION.saveDraft}
          </Button>
          <Button
            sx={{
              width: { xs: '40%', sm: '200px' },
              '@media(min-width: 280px) and (max-width:319px)': {
                width: '100%',
              },
              borderRadius: '5px',
              border: '1px solid #FB631C',
              color: '#fff',
              background: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: { xs: '13px', sm: '15px' },
              fontWeight: 400,
            }}
            onClick={handleSubmitAd}
          >
            {PROPERTY_INFORMATION.submitAd}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SubmitButton;
