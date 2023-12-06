import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LOGIN_FORM_DATA } from '@/app/constants/Login';

const PasswordAndConfirmFields = ({
  handleInputChange,
  formData,
  handleFieldToggle,
  setFormData,
  passwordsMatch,
}) => {
  //   const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);
  //   const handleFieldToggle = (fieldName) => {
  //     setFormData({
  //       ...formData,
  //       [fieldName]: !formData[fieldName],
  //     });
  //   };
  //     const passwordsMatch = formData.password === formData.confirmPassword;
  //   const checkPasswordMatch = () => {
  //     if (passwordsMatch) {
  //     alert("Password match")
  //     }
  //     else {
  //        alert("Password donot match")
  //     }
  // }
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
      {!passwordsMatch && <p>Password don't match</p>}
    </>
  );
};
export default PasswordAndConfirmFields;
