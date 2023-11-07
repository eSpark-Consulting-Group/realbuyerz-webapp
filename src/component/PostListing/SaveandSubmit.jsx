import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import HideUnhideButton from './HideButton';

const SubmitButton = ({handleClickButton}) => {
  const Savedraft = "Save as draft";
  const SubmitAd = "Submit Ad"
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
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            gap: '10px',
            width: '90%',
          }}
        >
          <HideUnhideButton />
          <Button
            style={{
              width: '200px',
              borderRadius: '5px',
              border: '1px solid #FB631C',
              background: '#FFF',
              color: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: '15px',
              fontWeight: 400,
            }}
          >
            {Savedraft}
          </Button>
          <Button
            style={{
              width: '200px',
              borderRadius: '5px',
              border: '1px solid #FB631C',
              color: '#fff',
              background: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: '15px',
              fontWeight: 400,
            }}
            onClick={handleClickButton}
          >
            {SubmitAd}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SubmitButton;
