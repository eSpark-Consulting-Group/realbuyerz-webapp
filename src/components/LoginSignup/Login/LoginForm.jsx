'use client';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import PasswordAndConfirmFields from './PasswordAndConfirmField';
import PasswordFields from './PasswordTextfield';

import { FORM_LABEL, LOGIN_FORM_DATA } from '@/src/constants/Login';

const common = {
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
    WebkitBoxShadow: '0 0 0 1000px white inset !important',
    WebkitTextFillColor: '#000 !important',
    transition: 'background-color 5000s ease-in-out 0s !important',
  },
};

const getTextFieldProps = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  type = 'text',
  autoComplete = '',
}) => ({
  placeholder,
  name,
  value,
  onChange,
  variant: 'outlined',
  fullWidth: true,
  type,
  error,
  helperText,
  autoComplete,
  inputProps: {
    sx: {
      height: '10px',
      borderRadius: '5px',
      border: '1px solid #E4E4E4',
      background: '#fff',
      fontSize: '15px',
      fontWeight: 400,
    },
  },
});

const FormContainer = ({
  isLoginForm,
  handleInputContactNumber,
  contactNumber,
  formik,
}) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);

  const handleFieldToggle = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const renderLoginFields = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
      <TextField
        {...getTextFieldProps({
          placeholder: FORM_LABEL.emailUsername,
          name: 'email',
          value: formik.values.email,
          onChange: formik.handleChange,
          type: 'email',
        })}
        sx={{
          ...common,
          '& .MuiOutlinedInput-root': {
            height: '40px',
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

      {formik.touched.password && formik.errors.password && (
        <Typography variant="body2" color="error" sx={{ fontSize: '12px' }}>
          {formik.errors.password}
        </Typography>
      )}
    </Box>
  );

  const renderSignupFields = () => (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          mb: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          {['firstName', 'lastName'].map((field) => (
            <TextField
              key={field}
              {...getTextFieldProps({
                placeholder: FORM_LABEL[field],
                name: field,
                value: formik.values[field],
                onChange: formik.handleChange,
                error: formik.touched[field] && Boolean(formik.errors[field]),
                helperText: formik.touched[field] && formik.errors[field],
              })}
              sx={{
                ...common,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <TextField
            {...getTextFieldProps({
              placeholder: FORM_LABEL.emailAddress,
              name: 'email',
              value: formik.values.email,
              onChange: formik.handleChange,
              error: formik.touched.email && Boolean(formik.errors.email),
              helperText: formik.touched.email && formik.errors.email,
            })}
            sx={{
              ...common,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
            }}
          />

          <TextField
            {...getTextFieldProps({
              placeholder: FORM_LABEL.contactNo,
              name: 'contactNumber',
              value: contactNumber,
              onChange: handleInputContactNumber,
              error:
                formik.touched.contactNumber &&
                Boolean(formik.errors.contactNumber),
              helperText:
                formik.touched.contactNumber && formik.errors.contactNumber,
              type: 'number',
              labelProps: { sx: { fontSize: '11px', color: '#000' } },
            })}
            sx={{
              ...common,
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
  );

  return isLoginForm ? renderLoginFields() : renderSignupFields();
};

export default FormContainer;