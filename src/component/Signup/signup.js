'use client';
import React from "react";
import { FormControl, Grid, Typography, Box, TextField, FormControlLabel, Checkbox, Button, InputLabel, Select, MenuItem } from "@mui/material";
import Image from "next/image";
const Signup = () => {
    return (
        <>
            <Box sx={{
                width: "400px",
                height: "650px",
                padding: 10,
                paddingTop: "40px",
                // paddingTop: "70px",
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

                    }} >Create Account</Typography>
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: "Inter"

                    }} >It’s Quick & Easy</Typography>
                    <form>
                        <Box sx={{
                            marginBottom: 2,
                        }}>
                            <TextField label="Email Address" variant="outlined" fullWidth />
                        </Box>
                        <Box sx={{
                            // width: '100%',
                            marginBottom: 2,
                        }}>
                            <TextField label="Contact Number" variant="outlined" type="number" fullWidth />
                        </Box>
                        <Select
                            sx={{ marginBottom: 2 }}
                            // value={contactNumber}
                            // onChange={handleChange}
                            placeholder="Applicant"
                            label="Applicant"
                            fullWidth
                            inputProps={{
                                id: "contact-number",
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                        <Box sx={{
                            marginBottom: 2,
                        }}>
                            <TextField label="Password" variant="outlined" type="password" fullWidth />
                        </Box>
                        <Box sx={{
                            marginBottom: 2,
                        }}>
                            <TextField label="Confirm Password" variant="outlined" type="confirm password" fullWidth />
                        </Box>
                    </form>


                    <Button sx={{
                        background: '#FB631C',
                        width: "100px",
                        borderRadius: "5px",
                        color: 'white',
                        '&:hover': {
                            background: '#FF631C',
                        },
                    }}>Sign up</Button>

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

                        }}>Already have an account?<span style={{
                            color: "#FB631C",
                            fontweight: 400
                        }}>Sign in</span></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Signup;