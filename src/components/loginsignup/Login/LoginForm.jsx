'use client';
import React, { useState } from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';

import { LOGIN_FORM, LOGIN_FORM_DATA } from '@/app/constants/Login';
import PasswordFields from './PasswordTextfield';
import PasswordAndConfirmFields from './PasswordAndConfirmField';

const FormContainer = ({
  isLoginForm,
  handleInputContactNumber,
  handleInputChange,
  contactNumber,
  handleAutoCompleteInputChange,
}) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);
  const handleFieldToggle = (fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: !formData[fieldName],
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
              name={LOGIN_FORM.email}
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
            <PasswordFields handleInputChange={handleInputChange} />
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
                name={LOGIN_FORM.firstName}
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                InputProps={{ sx: { height: '40px' } }}
                InputLabelProps={{
                  sx: { fontSize: '11px' },
                }}
              />
              <TextField
                label="Last Name"
                name={LOGIN_FORM.lastName}
                variant="outlined"
                fullWidth
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
              name={LOGIN_FORM.email}
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
              name={LOGIN_FORM.contactNo}
              value={contactNumber}
              onChange={handleInputContactNumber}
              sx={{
                '& input[type=number]::-webkit-inner-spin-button': {
                  '-webkit-appearance': 'none',
                  margin: 0,
                },
              }}
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
              onChange={(event, newValue) =>
                handleAutoCompleteInputChange(event, newValue)
              }
            />
            <PasswordAndConfirmFields
              handleInputChange={handleInputChange}
              handleFieldToggle={handleFieldToggle}
              formData={formData}
            />
          </Box>
        </form>
      )}
    </>
  );
};
export default FormContainer;
