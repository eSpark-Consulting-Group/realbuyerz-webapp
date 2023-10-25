'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Heading from './Heading';
import { Link } from 'react-router-dom';

function CreateAccount({ }) {
    return (
        <Container sx={{ pt: '90px', pb: '30px', textAlign: 'center' }}>
            <Heading
                heading={'Popular Locations'}
                paragraph={
                    'To browse & buy in your areas of interest. Look of properties by category'
                }
            />
            <Box sx={{ pt: '14px', pb: '58px' }}>

            </Box >
        </Container >
    );
}

export default CreateAccount;
