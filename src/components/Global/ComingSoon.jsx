'use client';
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ComingSoon() {
    return (
        <Box
            sx={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Grid
                container
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '20px',
                    background: '#FFF',
                }}
            >
                <Grid item xs={12}>
                    <Box sx={{ px: '50px', py: '30px', textAlign: 'center' }}>
                        <Box py={'20px'}><Image src={'/images/404/4042.gif'} height={500} width={500} />
                            {/* //jasy hi koi achi ismage mialy gi to repace Krdoonga for coming soon */}
                        </Box>
                        <Box pt={'20px'}>

                            <Typography
                                variant="h1"
                                sx={{
                                    color: '#333',
                                    fontWeight: '500',
                                }}
                            >
                                {`Coming Soon!`}
                            </Typography>
                        </Box>
                        <Box pb={'20px'}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#333',
                                    fontWeight: '400',
                                }}
                            >
                                {`This page is Under Construction`}
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                variant="primary"
                                type="button"
                                sx={{
                                    width: 'auto',
                                    height: { xs: '35px', sm: '45px' },
                                    textTransform: 'uppercase',
                                    borderRadius: '5px',
                                    // alignSelf: 'center',
                                    '&:hover': { color: '#fff' },
                                }}
                            >
                                <ArrowBackIosIcon />
                                {`Back to Home`}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default ComingSoon

