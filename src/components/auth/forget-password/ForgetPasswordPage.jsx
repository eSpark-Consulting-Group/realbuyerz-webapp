import { Grid } from '@mui/material';
import RectangleBorderImage from '../RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/auth/Login';

const ForgetPasswordPage = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS?.forgetPassword}
          height={LOGIN_FORM?.rectangleHeight?.loginFormHeight}
          paddingTop={LOGIN_FORM?.paddingTop}
        />
      </Grid>
    </>
  );
};

export default ForgetPasswordPage;
