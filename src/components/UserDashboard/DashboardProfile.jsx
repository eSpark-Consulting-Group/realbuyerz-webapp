import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const DashboardProfile = ({ Title, Location, Amount, Description }) => {
    return (
        <Box sx={{
            padding: '4px 54px 0px 54px'
        }}>
            <Grid container>
                <Grid item xs={2} sx={{ border: '1px solid green' }}>
                    <Image
                        src={'/images/Profile.png'}
                        width={156}
                        height={159} />
                </Grid>
                <Grid item xs={10} sx={{ border: '1px solid red' }}>
                    <Grid container>
                        <Grid item xs={3} sx={{ border: '1px solid red', display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{
                                // py: 1
                            }}>
                                <Typography
                                    sx={{
                                        color: '#126FAA',
                                        fontFamily: 'Inter',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: 'normal',
                                        py: .5
                                    }}>
                                    {Title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#757474',
                                        fontFamily: 'Inter',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: 'normal',
                                        py: .5

                                    }}>
                                    {Location}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#000',
                                        fontFamily: 'Inter',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: 'normal',
                                        py: .5

                                    }}>
                                    {Amount}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={9} sx={{ border: '1px solid red', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button
                                variant='primary'
                                sx={{
                                    width: '200px',
                                    height: '42px',
                                    borderRadius: '50px',
                                    border: '1px solid #FB631C',
                                }}
                            >
                                View
                            </Button>
                        </Grid>
                        <Box sx={{
                            mt: 5,
                            width: '906px'
                        }}>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: 'Inter',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: 300,
                                    lineHeight: 'normal'
                                }}>
                                {Description}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>

            </Grid>

        </Box >
    )
}

export default DashboardProfile
