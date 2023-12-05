import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/LoginSignup/Login/LoginSignupLayout';

const ResetPasswordForm = () => {
    return (
        <Grid
            container
            sx={{
                paddingTop: '100px',
            }}
        >
            <LoginSignupLayout />
        </Grid>
    );
};
export default ResetPasswordForm;
