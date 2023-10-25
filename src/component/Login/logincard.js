import React, { useState } from "react";
import { Typography, Box, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const LoginCard = () => {
    const router = useRouter()


    return (
        <>
            <Box sx={{
                width: { xs: "250px", md: "450px" },
                height: "530px",
                padding: 8,
                paddingTop: "70px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
                borderRadius: 2,
                background: 'white',
                marginTop: "23px",
                position: { xs: "none", md: "absolute" },
                right: { xs: "0", md: "300px" },
                // left: { xs: "0", md: "1100px" },
                zIndex: 2,
            }}>
                <Box sx={{
                    width: { xs: "180px", md: "320px" },
                    display: "flex",
                    flexDirection: "column",
                    height: "400px",
                    padding: "10px",
                    gap: { xs: "5px", md: "10px" }
                }}>
                    <Typography sx={{
                        color: "#FF631C",
                        fontSize: { xs: "15px", md: "20px" },
                        fontFamily: "Inter"
                    }}>Hey! Welcome</Typography>
                    <form>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}>
                            <TextField label="Email / Username" variant="outlined" fullWidth />
                            <TextField label="Password" variant="outlined" type="password" fullWidth />
                        </Box>
                    </form>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        gap: { xs: "0px", md: "10px" },
                    }}>
                        <Typography sx={{
                            textAlign: 'center',
                            color: '#FF631C',
                            fontSize: 10,
                            textDecoration: 'underline',
                            marginTop: 2,
                        }}>Forget Password?</Typography>
                        <FormControlLabel

                            label="Remember me"
                            control={<Checkbox color="primary" />}
                            labelPlacement="end"
                            sx={{
                                display: "flex",
                                flexDirection: 'row-reverse',
                                justifyContent: { xs: "flex-start", md: "space-between" },
                                color: '#777777',
                                fontSize: { xs: "5px", md: "10px" },
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }} >
                        <Button style={{
                            background: '#FB631C',
                            width: "100px",
                            borderRadius: "5px",
                            color: 'white',
                            '&:hover': {
                                background: '#FF631C',
                            },
                        }}>Log In</Button>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <hr style={{
                            width: "120px",
                            border: "1px #A5A5A5 solid"
                        }}></hr>
                        <Typography sx={{
                            color: "#909394"
                        }}> Or</Typography>
                        <hr style={{
                            width: "120px",
                            border: "1px #A5A5A5 solid"
                        }}></hr>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Button
                            sx={{
                                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                                width: { xs: "190px", md: "250px" },
                                padding: "10px",
                                fontSize: { xs: "10px", md: "14px" },
                                fontWeight: 500,
                                gap: "10px",
                                color: "#909394",
                                borderRadius: 2,
                                fontFamily: "Inter",
                            }}
                        >
                            <Image src="assets/images/google.svg" width={24} height={24} />
                            Login with Google
                        </Button>
                    </Box>
                    <Box sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        gap: "7px"
                    }}>
                        <Typography sx={{
                            color: "#333333",

                        }}>Doesn’t have an account yet? <span style={{
                            color: "#FB631C",
                            fontWeight: 400,
                        }}
                            onClick={() => router.push('/signup')}
                        >Sign up</span></Typography>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
export default LoginCard;