import React from 'react';
import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { Grid } from '@mui/material';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';
const Page = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS?.Page}
          height={LOGIN_FORM?.rectangleHeight?.PageFormHeight}
        />
      </Grid>
    </>
  );
};
export default Page;
