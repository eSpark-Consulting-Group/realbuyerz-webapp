import React from 'react';
import { Grid } from '@mui/material';

import SidePage from '@/src/component/LoginSidePage/Sidepage';
import LoginBox from '@/src/component/Login/LoginBox';

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
