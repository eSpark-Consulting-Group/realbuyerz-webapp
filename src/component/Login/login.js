'use client';
import React from "react";
import { FormControl, Grid, Typography, Box, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import Image from "next/image";
import Signup from "../Signup/signup";
const Login = () => {
    const handleClick = () => {
        console.log("Button clicked!");

    };
    return (
        <Box sx={{
            background: "white",
            display: "flex",
            // justifyContent: "center"
        }}>
            <Box sx={{
                width: "427px",
                height: "580px",
                borderRadius: "15px",
                border: "5px #1176AD solid",
                position: "relative"
            }}></Box>
            <Box sx={{
                width: "400px",
                height: "530px",
                padding: 10,
                paddingTop: "70px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
                borderRadius: 2,
                background: 'white',
                marginTop: "23px",
                position: "absolute",
                left: "1100px",
                zIndex: 2,

                // marginRight: "50px"

            }}>
                <Box sx={{
                    width: "320px",
                    background: "pink",
                    padding: "10px",
                    gap: "10px"

                }}>
                    <Typography sx={{
                        color: "#FF631C",
                        fontSize: "20px",
                        fontFamily: "Inter"

                    }} >Hey! Welcome</Typography>
                    <form>
                        <Box sx={{
                            marginBottom: 4,
                        }}>
                            <TextField label="Email / Username" variant="outlined" fullWidth />
                        </Box>
                        <Box sx={{
                            // width: '100%',
                            marginBottom: 4,
                        }}>
                            <TextField label="Password" variant="outlined" type="password" fullWidth />
                        </Box>

                    </form>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "5px",
                    }}>
                        <Typography sx={{
                            textAlign: 'center',
                            color: '#FF631C',
                            fontSize: 10,
                            textDecoration: 'underline',
                            marginTop: 2,
                        }}>Forget Password?</Typography>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                            sx={{
                                color: '#777777',
                                fontSize: 10,
                            }}
                        />
                    </Box>

                    <Button sx={{
                        background: '#FB631C',
                        width: "100px",
                        borderRadius: "5px",
                        color: 'white',
                        '&:hover': {
                            background: '#FF631C',
                        },
                    }}>Log In</Button>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <hr style={{
                            width: "120px",
                            border: "1px #A5A5A5 solid"
                        }}
                        ></hr>
                        <Typography sx={{
                            color: "#909394"
                        }}> Or</Typography>

                        <hr style={{
                            width: "120px",
                            border: "1px #A5A5A5 solid"
                        }}
                        ></hr>
                    </Box>

                    <Button
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                            width: "250px",
                            padding: "10px",
                            fontSize: "14px",
                            fontWeight: 500,
                            gap: "10px",
                            color: "#909394",
                            borderRadius: 2,
                            fontFamily: "Inter",
                            // marginTop: "15px",
                            mx: "auto"
                        }}
                        onClick={handleClick}
                    >
                        <Image src="assets/images/google.svg" width={24} height={24} />
                        Login with Google

                    </Button>
                    <Box sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontFamily: "Inter",
                        fontweight: 400,
                        gap: "5px"

                    }}>
                        <Typography sx={{
                            color: "#333333",

                        }}>Doesn’t have an account yet?<span style={{
                            color: "#FB631C",
                            fontweight: 400
                        }}>Sign up</span></Typography>
                    </Box>
                </Box>
            </Box>
            <Signup />
        </Box>
    )
}
export default Login;