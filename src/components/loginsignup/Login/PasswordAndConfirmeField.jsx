import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LOGIN_FORM } from '@/app/constants/Login';

const PasswordAndConfirmFields = () => {
  const [formData, setFormData] = useState(LOGIN_FORM.passwordFields);
  const handleFieldToggle = (fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: !formData[fieldName],
    });
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <TextField
        label="Password"
        variant="outlined"
        type={formData.showPassword ? 'text' : 'password'}
        fullWidth
        name="password"
        value={formData.password}
        onChange={handleFieldChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={() => handleFieldToggle('showPassword')}
                edge="end"
              >
                {formData.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type={formData.showConfirmPassword ? 'text' : 'password'}
        fullWidth
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleFieldChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={() => handleFieldToggle('showConfirmPassword')}
                edge="end"
              >
                {formData.showConfirmPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
export default PasswordAndConfirmFields;
