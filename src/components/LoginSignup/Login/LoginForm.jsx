'use client';
import React, { useState } from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';

import { LOGIN_FORM, LOGIN_FORM_DATA } from '@/app/constants/Login';
import PasswordFields from './PasswordTextfield';
import PasswordAndConfirmFields from './PasswordAndConfirmField';

const FormContainer = ({ isLoginForm }) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.initialFormData);
  const handleInputContactNumber = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 11) {
      setFormData({
        ...formData,
        [event.target.name]: inputValue,
      });
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              inputProps={{
                style: {
                  background: '#fff',
                },
              }}
              InputProps={{
                sx: {
                  '&:-webkit-autofill': {
                    transition: 'background-color 5000s ease-in-out 0s',
                    webkitTextFillColor: '#000',
                    background: '#fff !important',
                  },
                },
              }}
            />
            <PasswordFields />
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
                InputProps={{ sx: { height: '40px' } }}
                InputLabelProps={{
                  sx: { fontSize: '11px' },
                }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleInputChange}
                InputProps={{ sx: { height: '40px' } }}
                InputLabelProps={{
                  sx: { fontSize: '11px' },
                }}
              />
            </Box>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              InputProps={{ sx: { height: '40px' } }}
              InputLabelProps={{
                sx: { fontSize: '11px' },
              }}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              type="number"
              fullWidth
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputContactNumber}
              InputProps={{
                sx: { height: '40px', background: 'none' },
              }}
              InputLabelProps={{
                sx: { fontSize: '10.5px' },
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={LOGIN_FORM.dropdownOptions}
              getOptionLabel={(option) => option.label}
              sx={{ width: '100%', height: '50px' }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Applicant"
                  InputLabelProps={{
                    sx: { fontSize: '11px' },
                  }}
                />
              )}
              onChange={handleInputChange}
            />
            <PasswordAndConfirmFields />
          </Box>
        </form>
      )}
    </>
  );
};
export default FormContainer;
