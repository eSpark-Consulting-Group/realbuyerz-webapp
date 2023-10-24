'use client';
import { Box } from '@mui/system';
import React from 'react';
import { tabData } from './constant';
import PropertyTabs from './PropertyTabs';
import CustomHead from '@/src/components/layouts/customHead';
import Head from 'next/head';

const Listing = () => {
    return (
        <Box className='min-h-screen' sx={{ py: '80px' }}>
            <PropertyTabs data={tabData} />
        </Box>
    );
};

export default Listing;
