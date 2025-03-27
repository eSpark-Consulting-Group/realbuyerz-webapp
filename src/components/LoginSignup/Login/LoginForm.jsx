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
            gap: '13px',
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
              '& input:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px white inset !important', // Background color fix
                WebkitTextFillColor: '#000 !important', // Text color fix
                transition: 'background-color 5000s ease-in-out 0s !important',
              },
              '& .MuiOutlinedInput-root': {
                height: '40px', // Adjust karein input ki height
                borderRadius: '10px',
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
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: { xs: '10px', sm: '10px' },
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
                inputProps={{
                  style: {
                    height: `10px`,
                    borderRadius: '5px',
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
                  '& input:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset !important', // Background color fix
                    WebkitTextFillColor: '#000 !important', // Text color fix
                    transition:
                      'background-color 5000s ease-in-out 0s !important',
                  },
                  '& .MuiOutlinedInput-root': {
                    // height: '40px', // Adjust karein input ki height
                    borderRadius: '10px',
                  },
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
                inputProps={{
                  style: {
                    height: `10px`,
                    borderRadius: '5px',
                    border: '1px solid #E4E4E4',
                    background: '#fff',
                    fontSize: '14px',
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
                  '& input:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset !important', // Background color fix
                    WebkitTextFillColor: '#000 !important', // Text color fix
                    transition:
                      'background-color 5000s ease-in-out 0s !important',
                  },
                  '& .MuiOutlinedInput-root': {
                    // height: '40px', // Adjust karein input ki height
                    borderRadius: '10px',
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: { xs: '10px', sm: '10px' },
              }}
            >
              <TextField
                placeholder={FORM_LABEL?.emailAddress}
                variant="outlined"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                inputProps={{
                  style: {
                    height: `10px`,
                    borderRadius: '5px',
                    border: '1px solid #E4E4E4',
                    background: '#fff',
                    fontSize: '14px',
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
                  '& input:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset !important', // Background color fix
                    WebkitTextFillColor: '#000 !important', // Text color fix
                    transition:
                      'background-color 5000s ease-in-out 0s !important',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                }}
              />
              <TextField
                placeholder={FORM_LABEL.contactNo}
                variant="outlined"
                type="number"
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
                inputProps={{
                  style: {
                    height: `10px`,
                    borderRadius: '5px',
                    border: '1px solid #E4E4E4',
                    background: '#fff',
                    fontSize: '14px',
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
                  '& input:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset !important', // Background color fix
                    WebkitTextFillColor: '#000 !important', // Text color fix
                    transition:
                      'background-color 5000s ease-in-out 0s !important',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                }}
              />
            </Box>
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
