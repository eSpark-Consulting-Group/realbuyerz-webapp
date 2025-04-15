import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FORM_LABEL, LOGIN_FORM, TEXT_TYPE } from '@/src/constants/Login';

const getPasswordFieldProps = ({
  name,
  placeholder,
  value,
  showPassword,
  onToggle,
  touched,
  error,
  autoComplete,
}) => ({
  placeholder,
  name,
  fullWidth: true,
  variant: 'outlined',
  type: showPassword ? TEXT_TYPE.text : TEXT_TYPE.password,
  value,
  onChange: (e) => onToggle.formik.handleChange(e),
  error: touched && Boolean(error),
  helperText: touched && error,
  InputProps: {
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
    autoComplete,
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          sx={{ color: '#444444' }}
          onClick={onToggle.handler}
          edge="end"
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  },
  
});

const PasswordAndConfirmFields = ({ formData, handleFieldToggle, formik }) => {
  const fields = [
    {
      name: LOGIN_FORM.password,
      placeholder: FORM_LABEL.password,
      showKey: 'showPassword',
      autoComplete: 'new-password',
    },
    {
      name: LOGIN_FORM.confirmPassword,
      placeholder: FORM_LABEL.confirmPassword,
      showKey: 'showConfirmPassword',
      autoComplete: 'confirm-password',
    },
  ];

  return (
    <>
      {fields.map(({ name, placeholder, showKey, autoComplete }) => (
        <TextField
          key={name}
          {...getPasswordFieldProps({
            name,
            placeholder,
            value: formik.values[name],
            showPassword: formData?.[showKey],
            onToggle: {
              formik,
              handler: () => handleFieldToggle(showKey),
            },
            touched: formik.touched[name],
            error: formik.errors[name],
            autoComplete,
          })}
          InputLabelProps={{ sx: { fontSize: '11px', color: '#000' } }}
        />
      ))}
    </>
  );
};

export default PasswordAndConfirmFields;
