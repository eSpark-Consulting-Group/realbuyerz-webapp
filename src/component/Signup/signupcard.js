'use client';
import React from "react";
import { Typography, Box, TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const SignupCard = () => {
    const [applicant, setApplicant] = React.useState('');

    const handleChange = (event) => {
        setApplicant(event.target.value);
    };
    const router = useRouter()
    return (
        <>
            <Box sx={{
                width: { xs: "250px", md: "400px" },
                height: { xs: "650px", md: "600px" },
                padding: 8,
                paddingTop: "20px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
                borderRadius: 2,
                background: 'white',
                marginTop: "20px",
                position: { xs: "none", md: "absolute" },
                right: { xs: "0", md: "320px" },
                // left: { xs: "0", md: "1100px" },
                zIndex: 2,

            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "180px", md: "320px" },
                    height: "auto",
                    gap: { xs: "5px", md: "4px" }

                }}>
                    <Typography sx={{
                        color: "#FF631C",
                        fontSize: "20px",
                        fontFamily: "Inter"

                    }} >Create Account</Typography>
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: "Inter"

                    }} >It’s Quick & Easy</Typography>
                    <form>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "7px"
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "4px"

                            }}>
                                <TextField label="First Name" variant="outlined" fullWidth />
                                <TextField label="Last Name" variant="outlined" fullWidth />
                            </Box>
                            <TextField label="Email Address" variant="outlined" fullWidth />
                            <TextField label="Contact Number" variant="outlined" type="number" fullWidth />
                            {/* <InputLabel id="demo-simple-select-autowidth-label">Applicant</InputLabel> */}

                            <Select
                                placeholder="Applicant"
                                // labelId="demo-simple-select-autowidth-label"
                                // id="demo-simple-select-autowidth"
                                value={applicant}
                                onChange={handleChange}
                                label="Applicant"
                                fullWidth

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                            </Select>
                            <TextField label="Password" variant="outlined" type="password" fullWidth />
                            <TextField label="Confirm Password" variant="outlined" type="confirm password" fullWidth />
                        </Box>
                    </form>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Button style={{
                            background: '#FB631C',
                            width: "100px",
                            borderRadius: "5px",
                            color: 'white',
                            '&:hover': {
                                background: '#FF631C',
                            },
                        }}>Sign up</Button>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <hr style={{
                            width: "125px",
                            border: "1px #A5A5A5 solid"
                        }}
                        ></hr>
                        <Typography sx={{
                            color: "#909394"
                        }}> Or</Typography>

                        <hr style={{
                            width: "125px",
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
                            width: { xs: "190px", md: "250px" },
                            padding: "10px",
                            fontSize: { xs: "10px", md: "14px" },
                            fontWeight: 500,
                            gap: "10px",
                            color: "#909394",
                            borderRadius: 2,
                            fontFamily: "Inter",
                            // marginTop: "15px",
                            mx: "auto"
                        }}
                    >
                        <Image src="assets/images/google.svg" width={24} height={24} />
                        Login with Google

                    </Button>
                    <Box sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontFamily: "Inter",
                        fontweight: 400,
                        // gap: "5px"

                    }}>
                        <Typography sx={{
                            color: "#333333",

                        }}>Already have an account?<span style={{
                            color: "#FB631C",
                            fontweight: 400
                        }}
                            onClick={() => router.push('/signin')}

                        >Sign in </span></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default SignupCard;