"use client";
import ViewAllPosting from '@/src/components/UserDashboard/ViewAllPosting'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <>
            <Box
                sx={{
                    background: '#fff',
                    borderRadius: '10px',
                    border: '1px solid #E4E4E4',
                    mt: 6,
                    mb: 6,
                    mx: { xs: 'auto', lg: 0 },
                    maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
                }}
            >
                {/* <ViewAllPosting /> */}
                <Divider />
                <Box
                    sx={{
                        p: { xs: 2, sm: 3 },
                    }}
                >
                    {
                        [...Array(5)].map((_, index) => (
                            <Grid container key={index} sx={{
                                background: '#F5F6FA',
                                border: 'solid 1px #E4E4E4',
                                borderRadius: '20px',
                                padding: '25px 30px',
                                marginBottom: '30px'
                            }}>
                                <Grid item md={3.65}>
                                    <Box component={"img"} src={'/images/PropertyImg.png'} sx={{
                                        width: "100%"
                                    }} />
                                </Grid>
                                <Grid item md={8.35} sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '0 20px'
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        position: "relative",
                                    }}>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            lineHheight: '24px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',

                                        }}>NEED 4 BEDROOM APARTMENT</Typography>
                                        <Button variant='contained' sx={{
                                            position: "absolute",
                                            right: 0
                                        }}> Trash</Button>
                                    </Box>
                                    <Divider sx={{
                                        marginY: "20px"
                                    }} />
                                    <Box sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                marginBottom: '10px',
                                                alignItems: 'center'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 700,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#126FAA'
                                                }}>Purpose: </Typography>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#333333',
                                                    marginLeft: '5px'
                                                }}>Selling</Typography>
                                            </Box>
                                            <Box sx={{
                                                marginBottom: '10px',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 700,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#126FAA'
                                                }}>Proporty Type: </Typography>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#333333',
                                                    marginLeft: '5px'
                                                }}>House</Typography>
                                            </Box>
                                            <Box sx={{
                                                marginBottom: '10px',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 700,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#126FAA'
                                                }}>City: </Typography>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#333333',
                                                    marginLeft: '5px'
                                                }}>Karachi</Typography>
                                            </Box>
                                            <Box sx={{
                                                marginBottom: '10px',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 700,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#126FAA'
                                                }}>Location: </Typography>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'left',
                                                    color: '#333333',
                                                    marginLeft: '5px'
                                                }}>Gulshan-e-Iqbal</Typography>
                                            </Box>
                                            <Typography sx={{
                                                fontSize: '12px',
                                                fontWeight: 400,
                                                lineHeight: '15px',
                                                letterSpacing: '0em',
                                                textAlign: 'left',
                                                flex: 1
                                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</Typography>
                                        </Box>
                                        <Typography sx={{
                                            position: 'absolute',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            lineHeight: '17px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            right:"20px"

                                        }}>Amount: 10M</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default page