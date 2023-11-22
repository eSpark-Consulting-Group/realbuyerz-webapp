import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LOGIN_FORM } from '@/app/constants/Login';

const PasswordFields = () => {
  const [formData, setFormData] = useState(LOGIN_FORM.passwordFields);
  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleInputChange = (event) => {
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
        onChange={handleInputChange}
        InputProps={{
                  
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {formData.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
export default PasswordFields;
