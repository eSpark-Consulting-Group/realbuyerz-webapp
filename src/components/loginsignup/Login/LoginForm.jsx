'use client';
import React, { useState } from 'react';
import { MenuItem, Box, TextField, Autocomplete } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LOGIN_FORM } from '@/app/constants/LoginConstants';

const FormContainer = ({ isLoginForm }) => {
  const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const handlePassword = (event) => {
    setPassword(event.target.value);
    };
    
  const handleConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
      setConfirmShowPassword(!showConfirmPassword)
  };
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
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
            <TextField label="Email / Username" variant="outlined" fullWidth />
            <TextField
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
            />
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
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Box>
            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField
              label="Contact Number"
              variant="outlined"
              type="number"
              fullWidth
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
            />
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
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleConfirmPassword}
            />

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
            /> */}
          </Box>
        </form>
      )}
    </>
  );
};
export default FormContainer;
