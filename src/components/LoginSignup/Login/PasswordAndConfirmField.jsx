import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FORM_LABEL, LOGIN_FORM, TEXT_TYPE } from '@/src/constants/Login';

const getPasswordFieldProps = ({
  name,
  label,
  value,
  showPassword,
  onToggle,
  touched,
  error,
  autoComplete,
}) => ({
  label,
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
      '& fieldset': {
        borderColor: '#E4E4E4',
      },
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
      label: FORM_LABEL.password,
      showKey: 'showPassword',
      autoComplete: 'new-password',
    },
    {
      name: LOGIN_FORM.confirmPassword,
      label: FORM_LABEL.confirmPassword,
      showKey: 'showConfirmPassword',
      autoComplete: 'confirm-password',
    },
  ];

  return (
    <>
      {fields.map(({ name, label, showKey, autoComplete }) => (
        <TextField
          key={name}
          {...getPasswordFieldProps({
            name,
            label,
            value: formik.values[name],
            showPassword: formData?.[showKey],
            onToggle: {
              formik,
              handler: () => handleFieldToggle(showKey),
            },
            touched: formik.touched[name],
            error: formik.errors[name],
            autoComplete,
            InputLabelProps: {
              sx: { fontSize: '11px', color: '#000' },
            },
            
          })}
        />
      ))}
    </>
  );
};

export default PasswordAndConfirmFields;
