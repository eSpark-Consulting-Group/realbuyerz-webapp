'use client';
import React, { useState } from 'react';
import {
    Box,
    Grid,
} from '@mui/material';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import AreaSize from './AreaSize';
import PropertInstallment from './PropertyInstallment';

const PropertySize = () => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        border: '1px #E4E4E4 solid',
                        borderRadius: '10px',
                        width: '90%',
                        height: { xs: '1000px', md: '730px' },
                        justifyContent: 'flex-start',
                    }}
                >
                    <PostTitle text={PropertyInformation.postTitles.sizeprice} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: { xs: '10px', md: '0' },
                            width: { xs: '80%', sm: '90%', md: '800px' },
                            padding: '20px',
                            backgroundImage: 'url("/assets/images/realbuyer.svg")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            mx: 'auto',
                            '@media (max-width: 600px)': {
                                backgroundImage: 'none',
                            },
                        }}
                    >
                        <AreaSize PropertyInformation={PropertyInformation.propertySize}
                        />
                        <PropertInstallment PropertyInformation={PropertyInformation.installment} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
export default PropertySize;
