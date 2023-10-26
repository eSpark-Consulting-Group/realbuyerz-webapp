'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import LoginCard from './logincard';

const LoginBox = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: "center" }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: "none", md: "flex-start" },
                        width: { xs: "100%", md: "100%" }
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-end",
                            width: { xs: "200px", md: '500px' },
                            height: '800px',
                            backgroundImage: 'url("/assets/images/Rectangle.svg")',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box sx={{
                            marginRight: "-80px",
                            paddingTop: "40px"

                        }}>
                            <LoginCard />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: { xs: "flex", md: "none" },
                        justifyContent: "center",
                        width: "100%",
                    }}><LoginCard /></Box>
                </Box>
            </Grid>
        </Grid>
    );
};
export default LoginBox;
