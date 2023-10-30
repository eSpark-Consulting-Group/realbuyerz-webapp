'use client';
import React, { useState } from 'react';
import {
    Typography,
    Box,
    TextField,
    Button,
    MenuItem
} from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';

const SignupCard = () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState(true)
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value)
    };
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    };
    const isPasswordMatch = password === confirmPassword;
    const router = useRouter();
    return (
        <>
            <Box
                sx={{
                    width: { xs: '95%', md: '450px' },
                    height: { xs: '650px', md: '605px' },
                    padding: 8,
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
                    borderRadius: 2,
                    background: 'white',
                    marginTop: '20px',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { xs: '100%', md: '320px' },
                        height: 'auto',
                        gap: { xs: '5px', md: '8px' },
                    }}
                >
                    <Typography
                        sx={{
                            color: '#FF631C',
                            fontSize: '20px',
                            fontWeight: 600,
                            fontFamily: 'Inter',
                        }}
                    >
                        Create Account
                    </Typography>
                    <Typography
                        sx={{
                            color: '#333333',
                            fontSize: '16px',
                            fontWeight: 400,
                            fontFamily: 'Inter',
                        }}
                    >
                        It’s Quick & Easy
                    </Typography>
                    <form>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '7px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '4px',
                                }}
                            >
                                <TextField label="First Name" variant="outlined" fullWidth
                                />
                                <TextField label="Last Name" variant="outlined" fullWidth
                                />
                            </Box>
                            <TextField label="Email Address" variant="outlined" fullWidth
                            />
                            <TextField
                                label="Contact Number"
                                variant="outlined"
                                type="number"
                                fullWidth
                            />
                            <TextField
                                style={{ width: '100%', color: "#777777" }}
                                variant="outlined"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                select
                                label="Applicant"
                            >
                                <MenuItem key={1} value="test0">
                                    None
                                </MenuItem>
                                <MenuItem key={2} value="test1">
                                    Test 1
                                </MenuItem>
                                <MenuItem key={3} value="test2">
                                    Test 2
                                </MenuItem>
                            </TextField>
                            <TextField
                                placeholder="Password"
                                label="Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                style={{ color: '#444444' }}
                                                onClick={handlePasswordToggle}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={handlePassword}
                            />
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                style={{ color: '#444444' }}
                                                onClick={handlePasswordToggle}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={handleConfirmPassword}
                            />
                            {/* {isPasswordMatch ? (
                                <p style={{ color: 'green' }}>Passwords match!</p>
                            ) : (
                                <p style={{ color: 'red' }}>Passwords do not match.</p>
                            )} */}
                        </Box>
                    </form>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            style={{
                                background: '#FB631C',
                                width: '100px',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: "14px",
                                '&:hover': {
                                    background: '#FF631C',
                                },
                            }}
                        >
                            Sign up
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <hr
                            style={{
                                width: '135px',
                                border: '1px #A5A5A5 solid',
                            }}
                        ></hr>
                        <Typography
                            sx={{
                                color: '#909394',
                            }}
                        >
                            {' '}
                            Or
                        </Typography>

                        <hr
                            style={{
                                width: '135px',
                                border: '1px #A5A5A5 solid',
                            }}
                        ></hr>
                    </Box>

                    <Button
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                            width: { xs: '150px', md: '250px' },
                            height: '37px',
                            fontSize: { xs: '12px', md: '15px' },
                            fontWeight: 500,
                            gap: '10px',
                            color: '#909394',
                            fontFamily: 'Inter',
                            mx: 'auto',
                            textTransform: "math-auto"
                        }}
                    >
                        <Image src="assets/images/google.svg" width={24} height={24} />
                        Login with Google
                    </Button>
                    <Box
                        sx={{
                            textAlign: 'center',
                            fontSize: '16px',
                            fontFamily: 'Inter',
                            fontweight: 400,
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#333333',
                            }}
                        >
                            Already have an account?
                            {' '}
                            <span
                                style={{
                                    color: '#FB631C',

                                }}
                                onClick={() => router.push('/signin')}
                            >
                                Sign in
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default SignupCard;
