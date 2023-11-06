'use client';
import React, { useState } from 'react';
import { Box, TextField, Autocomplete, Button } from '@mui/material';

import { LOGIN_FORM } from '@/app/constants/LoginConstants';
import PasswordFields from './PasswordTextfield';
import PasswordAndConfirmFields from './PasswordAndConfirmeField';

const FormContainer = ({ isLoginForm }) => {
  const [formData, setFormData] = useState(LOGIN_FORM.initialFormData);
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
            <PasswordAndConfirmFields />
          </Box>
        </form>
      )}
    </>
  );
};
export default FormContainer;
