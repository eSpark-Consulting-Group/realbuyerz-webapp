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
          backgroundImage: 'url("/assets/images/realbuyer.svg")',
          backgroundSize: '70% 70%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px #E4E4E4 solid',
                        borderRadius: '10px',
                        width: '90%',
                        height: { xs: '1000px', md: '730px' },
                    }}
                >
                    <PostTitle text={PropertyInformation.postTitles.sizeprice} />
                   <Box
              sx={{
                display: 'flex',
              flexDirection: "column",
                justifyContent:"center",
              alignItems: "center",
                padding:"60px"
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
