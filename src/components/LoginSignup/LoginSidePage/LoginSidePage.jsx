'use client';
import { Grid } from '@mui/material';

import LoginPageText from './LoginPageText';
import RealEstateImage from './RealEstateImage';
import PropertyBuilding from './BuildingImage';

const LoginSidePage = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 4,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '700px',
        }}
      >
        <Box
          component={'img'}
          alt={ALT?.BUILDING_IMAGE || ''}
          src={'/images/signup_page/boximage.svg'}
          sx={{
            width: '80%',
            height: 'auto',
            maxWidth: '632px',
            objectFit: 'contain',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: '#126FAA',
              fontSize: {
                xs: '25px',
                sm: '21px',
                md: '22px',
                lg: '30px',
                xl: '35px',
              },
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {LOGIN_FORM?.loginCard?.connect}
          </Typography>
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: {
                xs: '12px',
                sm: '11px',
                md: '13px',
                lg: '15px',
                xl: '18px',
              },

              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            {LOGIN_FORM?.loginCard?.propertyDealer}
          </Typography>
        </Box>
        <Box
          component={'img'}
          src="/images/signup_page/highbuilding.svg"
          sx={{
            width: '80%',
            height: 'auto',
            maxWidth: '488px',
            objectFit: 'contain',
          }}
          alt={ALT?.BUILDING_IMAGE}
        />
      </Box>
    </Grid>
  );
};
export default LoginSidePage;
