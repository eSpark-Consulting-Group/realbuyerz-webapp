'use client';
import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import { FORM_LABEL, LOGIN_FORM, LOGIN_FORM_DATA } from '@/src/constants/Login';
import PasswordFields from './PasswordTextfield';
import PasswordAndConfirmFields from './PasswordAndConfirmField';

const FormContainer = ({
  isLoginForm,
  handleInputContactNumber,
  handleInputChange,
  contactNumber,
  formik,
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <TextField
            label={FORM_LABEL.emailUsername}
            variant="outlined"
            fullWidth
            type="email"
            value={formik.values.email}
            name={LOGIN_FORM.email}
            onChange={formik.handleChange}
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
          {formik.touched.email && formik.errors.email ? (
            <Typography variant="body2" color="error" sx={{ fontSize: '12px' }}>
              {formik.errors.email}
            </Typography>
          ) : null}
          <PasswordFields
            formik={formik}
            handleInputChange={handleInputChange}
          />
          ;
          {formik.touched.password && formik.errors.password ? (
            <Typography variant="body2" color="error" sx={{ fontSize: '12px' }}>
              {formik.errors.password}
            </Typography>
          ) : null}
        </Box>
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
                label={FORM_LABEL.firstName}
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
                label={FORM_LABEL.lastName}
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
              label={FORM_LABEL.emailAddress}
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
              label={FORM_LABEL.contactNo}
              variant="outlined"
              type={FORM_LABEL.number}
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
