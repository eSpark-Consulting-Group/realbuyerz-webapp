'use client';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import PasswordAndConfirmFields from './PasswordAndConfirmField';
import PasswordFields from './PasswordTextfield';

import { FORM_LABEL, LOGIN_FORM_DATA } from '@/src/constants/Login';

const getTextFieldProps = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
  type = 'text',
  autoComplete = '',
  labelProps,
}) => ({
  label,
  name,
  value,
  onChange,
  variant: 'outlined',
  fullWidth: true,
  type,
  error,
  helperText,
  autoComplete,
  InputProps: {
    sx: {
      height: '40px',
      margin: '2px 0px',
      '& fieldset': {
        borderColor: '#E4E4E4',
      },
    },
  },
  InputLabelProps: { labelProps },
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        {...getTextFieldProps({
          label: FORM_LABEL.emailUsername,
          name: 'email',
          value: formik.values.email,
          onChange: formik.handleChange,
          type: 'email',
          labelProps: {},
        })}
        inputProps={{
          style: { background: '#fff' },
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '7px', mb: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          {['firstName', 'lastName'].map((field) => (
            <TextField
              key={field}
              {...getTextFieldProps({
                label: FORM_LABEL[field],
                name: field,
                value: formik.values[field],
                onChange: formik.handleChange,
                error: formik.touched[field] && Boolean(formik.errors[field]),
                helperText: formik.touched[field] && formik.errors[field],
                labelProps: { sx: { fontSize: '11px', color: '#000' } }
              })}
            />
          ))}
        </Box>

        <TextField
          {...getTextFieldProps({
            label: FORM_LABEL.emailAddress,
            name: 'email',
            value: formik.values.email,
            onChange: formik.handleChange,
            error: formik.touched.email && Boolean(formik.errors.email),
            helperText: formik.touched.email && formik.errors.email,
            labelProps: { sx: { fontSize: '11px', color: '#000' } }
          })}
        />

        <TextField
          {...getTextFieldProps({
            label: FORM_LABEL.contactNo,
            name: 'contactNumber',
            value: contactNumber,
            onChange: handleInputContactNumber,
            error:
              formik.touched.contactNumber &&
              Boolean(formik.errors.contactNumber),
            helperText:
              formik.touched.contactNumber && formik.errors.contactNumber,
            type: 'number',
            labelProps: { sx: { fontSize: '11px', color: '#000' } }
          })}
          sx={{
            '& input[type=number]::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
          }}
        />

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
