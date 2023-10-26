'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import SignupCard from './signupcard';

const SignupBox = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'none', md: 'flex-start' },
                        width: { xs: '100%', md: '100%' },
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            width: '500px',
                            height: '800px',
                            backgroundImage: 'url("/assets/images/Rectangle.svg")',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box
                            sx={{
                                marginRight: '-80px',
                                paddingTop: '10px',
                            }}
                        >
                            <SignupCard />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <SignupCard />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
export default SignupBox;
