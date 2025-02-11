'use client';
import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { FORM_LABEL, LOGIN_FORM_DATA } from '@/src/constants/Login';
import PasswordAndConfirmFields from './PasswordAndConfirmField';
import PasswordFields from './PasswordTextfield';

const FormContainer = ({
  isLoginForm,
  handleInputContactNumber,
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
            variant="outlined"
            fullWidth
            type="email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            placeholder={FORM_LABEL?.emailUsername}
            inputProps={{
              style: {
                height: `10px`,
                borderRadius: '10px',
                border: '1px solid #E4E4E4',
                background: '#fff',
                fontSize: '15px',
                fontWeight: 400,
              },
            }}
            sx={{
              '& fieldset': { border: 'none' },
              gap: 1,
              textAlign: 'left',
              '& input::placeholder': {
                color: '#000',
                opacity: 1,
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '.MuiFormHelperText-contained': {
                marginLeft: 0.5,
              },
              '&:-webkit-autofill': {
                transition: 'background-color 5000s ease-in-out 0s',
                webkitTextFillColor: '#000',
                background: '#fff !important',
              },
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <Typography variant="body2" color="error" sx={{ fontSize: '12px' }}>
              {formik.errors.email}
            </Typography>
          ) : null}
          <PasswordFields formik={formik} />
          {formik.touched.password && formik.errors.password ? (
            <Typography variant="body2" color="error" sx={{ fontSize: '12px' }}>
              {formik.errors.password}
            </Typography>
          ) : null}
        </Box>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '7px',
              marginBottom: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <TextField
                placeholder={FORM_LABEL?.firstName}
                name="firstName"
                variant="outlined"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                InputProps={{
                  sx: {
                    height: '40px',
                    margin: '2px 0px',
                    '& fieldset': { border: 'none' },
                    gap: 1,
                    textAlign: 'left',
                    '& input::placeholder': {
                      color: '#000',
                      opacity: 1,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '.MuiFormHelperText-contained': {
                      marginLeft: 0.5,
                    },
                    '&:-webkit-autofill': {
                      height: '40px',
                      transition: 'background-color 5000s ease-in-out 0s',
                      webkitTextFillColor: '#000',
                      background: '#fff !important',
                    },
                  },
                  style: {
                    borderRadius: '5px',
                    border: '1px solid #E4E4E4',
                    background: '#fff',
                    fontSize: '14px',
                    fontWeight: 400,
                  },
                }}
                InputLabelProps={{
                  sx: { fontSize: '11px', color: '#000' },
                }}
              />
              <TextField
                placeholder={FORM_LABEL.lastName}
                name="lastName"
                variant="outlined"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                InputProps={{
                  sx: {
                    height: '40px',
                    margin: '2px 0px',
                    '& fieldset': { border: 'none' },
                    gap: 1,
                    textAlign: 'left',
                    '& input::placeholder': {
                      color: '#000',
                      opacity: 1,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '.MuiFormHelperText-contained': {
                      marginLeft: 0.5,
                    },
                    '&:-webkit-autofill': {
                      height: '40px',
                      transition: 'background-color 5000s ease-in-out 0s',
                      webkitTextFillColor: '#000',
                      background: '#fff !important',
                    },
                  },
                  style: {
                    borderRadius: '5px',
                    border: '1px solid #E4E4E4',
                    background: '#fff',
                    fontSize: '14px',
                    fontWeight: 400,
                  },
                }}
                InputLabelProps={{
                  sx: { fontSize: '11px', color: '#000' },
                }}
              />
            </Box>
            <TextField
              placeholder={FORM_LABEL?.emailAddress}
              variant="outlined"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                sx: {
                  height: '40px',
                  margin: '2px 0px',
                  '& fieldset': { border: 'none' },
                  gap: 1,
                  textAlign: 'left',
                  '& input::placeholder': {
                    color: '#000',
                    opacity: 1,
                  },
                  '& input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                  '.MuiFormHelperText-contained': {
                    marginLeft: 0.5,
                  },
                  '&:-webkit-autofill': {
                    height: '40px',
                    transition: 'background-color 5000s ease-in-out 0s',
                    webkitTextFillColor: '#000',
                    background: '#fff !important',
                  },
                },
                style: {
                  borderRadius: '5px',
                  border: '1px solid #E4E4E4',
                  background: '#fff',
                  fontSize: '14px',
                  fontWeight: 400,
                },
              }}
              InputLabelProps={{
                sx: { fontSize: '11px', color: '#000' },
              }}
            />
            <TextField
              placeholder={FORM_LABEL.contactNo}
              variant="outlined"
              type="text"
              fullWidth
              name="contactNumber"
              value={contactNumber}
              onChange={handleInputContactNumber}
              error={
                formik.touched.contactNumber &&
                Boolean(formik.errors.contactNumber)
              }
              helperText={
                formik.touched.contactNumber && formik.errors.contactNumber
              }
              sx={{
                '& input[type=number]::-webkit-inner-spin-button': {
                  webkitAppearance: 'none',
                  margin: 0,
                },
              }}
              InputProps={{
                sx: {
                  height: '40px',
                  margin: '2px 0px',
                  '& fieldset': { border: 'none' },
                  gap: 1,
                  textAlign: 'left',
                  '& input::placeholder': {
                    color: '#000',
                    opacity: 1,
                  },
                  '& input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                  '.MuiFormHelperText-contained': {
                    marginLeft: 0.5,
                  },
                  '&:-webkit-autofill': {
                    height: '40px',
                    transition: 'background-color 5000s ease-in-out 0s',
                    webkitTextFillColor: '#000',
                    background: '#fff !important',
                  },
                },
                style: {
                  borderRadius: '5px',
                  border: '1px solid #E4E4E4',
                  background: '#fff',
                  fontSize: '14px',
                  fontWeight: 400,
                },
              }}
              InputLabelProps={{
                sx: { fontSize: '10.5px', color: '#000' },
              }}
            />
            <PasswordAndConfirmFields
              handleFieldToggle={handleFieldToggle}
              formData={formData}
              formik={formik}
            />
          </Box>
        </form>
      )}
    </>
  );
};

export default FormContainer;
