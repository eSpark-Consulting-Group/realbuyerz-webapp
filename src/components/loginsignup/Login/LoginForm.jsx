'use client';
import React, { useState } from 'react';
import { Box, TextField, Autocomplete, Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LOGIN_FORM } from '@/app/constants/LoginConstants';
import PasswordFields from './PasswordTextfield';

const FormContainer = ({ isLoginForm }) => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handlePasswordToggle = () => {
  //   setShowPassword(!showPassword);
  // };
  // const handleConfirmPasswordToggle = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };
  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // const handleConfirmPassword = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  const [formData, setFormData] = useState(LOGIN_FORM.initialFormData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleConsoleLog = () => {
    console.log(formData);
  };

  return (
    <>
      {isLoginForm ? (
        <form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <TextField
              label="Email / Username"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
<PasswordFields type="password" />
            {/* <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              name="password"
              // value={formData.password}
              onChange={handlePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: '#444444' }}
                      // onClick={handlePassword}
                      onClick={handlePasswordToggle}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
          </Box>
        </form>
      ) : (
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
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Box>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              type="number"
              fullWidth
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={LOGIN_FORM.dropdownOptions}
              getOptionLabel={(option) => option.label}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Applicant" />
              )}
              onChange={handleInputChange}
              />
              <PasswordFields type="passwordConfirm" />

            {/* <TextField
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
            /> */}
            {/* <TextField
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? 'text' : 'password'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: '#444444' }}
                      onClick={handleConfirmPasswordToggle}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleConfirmPassword}
            /> */}
          </Box>
        </form>
      )}
    </>
  );
};
export default FormContainer;
