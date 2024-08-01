import React from 'react';
import { TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FORM_LABEL, LOGIN_FORM, TEXT_TYPE } from '@/src/constants/Login';

const PasswordAndConfirmFields = ({ formik, formData, handleFieldToggle }) => {
  return (
    <>
      <TextField
        label={FORM_LABEL.password}
        variant="outlined"
        type={formData?.showPassword ? LOGIN_FORM.text : LOGIN_FORM.password}
        fullWidth
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          sx: { height: '40px' },
          autoComplete: 'new-password',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={() => handleFieldToggle('showPassword')}
                edge="end"
              >
                {formData?.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ sx: { fontSize: '11px' } }}
      />
     
      <TextField
        label={FORM_LABEL.confirmPassword}
        variant="outlined"
        type={formData?.showConfirmPassword ? TEXT_TYPE.text : TEXT_TYPE.password}
        fullWidth
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        InputProps={{
          sx: { height: '40px' },
          autoComplete: 'confirm-password',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={() => handleFieldToggle('showConfirmPassword')}
                edge="end"
              >
                {formData?.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ sx: { fontSize: '11px' } }}
      />
      
    </>
  );
};

export default PasswordAndConfirmFields;
