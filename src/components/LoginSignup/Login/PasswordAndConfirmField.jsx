import React from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordAndConfirmFields = ({
  handleInputChange,
  formData,
  handleFieldToggle,
  passwordsMatch,
}) => {
  return (
    <>
      <TextField
        label="Password"
        variant="outlined"
        type={formData.showPassword ? 'text' : 'password'}
        fullWidth
        name="password"
        onChange={handleInputChange}
        InputProps={{
          sx: {
            height: '40px',
          },
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
        InputLabelProps={{
          sx: {
            fontSize: '11px',
          },
        }}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type={formData.showConfirmPassword ? 'text' : 'password'}
        fullWidth
        name="confirmPassword"
        onChange={handleInputChange}
        InputProps={{
          sx: {
            height: '40px',
          },
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
        InputLabelProps={{
          sx: {
            fontSize: '11px',
          },
        }}
      />
      {passwordsMatch}
    </>
  );
};
export default PasswordAndConfirmFields;
