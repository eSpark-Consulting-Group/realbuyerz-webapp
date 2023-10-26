import { Grid } from '@mui/material';
import React from 'react';
import SidePage from '@/src/component/LoginSidePage/sidepage';
import LoginBox from '@/src/component/Login/loginbox';

const Signin = () => {
    return (
        <Grid
            container
            sx={{
                paddingTop: '100px',
            }}
        >
            <Grid item xs={12} md={1}></Grid>
            <Grid
                item
                xs={12}
                md={10}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Grid item xs={12} md={6} sx={{}}>
                    <SidePage />
                </Grid>
                <Grid item xs={12} md={6} sx={{}}>
                    <LoginBox />
                </Grid>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
        </Grid>
    );
};
export default Signin;
