import { useState } from 'react';

import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FORM_LABEL, LOGIN_FORM, LOGIN_FORM_DATA } from '@/src/constants/Login';

const PasswordFields = ({ formik }) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);
  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };
  
  return (
    <>
      <TextField
        placeholder={FORM_LABEL?.password}
        variant="outlined"
        type={formData?.showPassword ? LOGIN_FORM.text : LOGIN_FORM.password}
        fullWidth
        value={formik.values.password}
        name={LOGIN_FORM.password}
        onChange={formik.handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{ color: '#444444' }}
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {formData?.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            height: `45px`,
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
    </>
  );
};
export default PasswordFields;
