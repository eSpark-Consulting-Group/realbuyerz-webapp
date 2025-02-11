import { FORM_LABEL, LOGIN_FORM, TEXT_TYPE } from '@/src/constants/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const PasswordAndConfirmFields = ({ formData, handleFieldToggle, formik }) => {
  return (
    <>
      <TextField
        placeholder={FORM_LABEL?.password}
        variant="outlined"
        type={formData?.showPassword ? TEXT_TYPE.text : TEXT_TYPE.password}
        fullWidth
        name={LOGIN_FORM.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
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
        InputLabelProps={{ sx: { fontSize: '11px', color: '#000' } }}
      />

      <TextField
        placeholder={FORM_LABEL?.confirmPassword}
        variant="outlined"
        type={
          formData?.showConfirmPassword ? TEXT_TYPE.text : TEXT_TYPE.password
        }
        fullWidth
        name={LOGIN_FORM.confirmPassword}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        InputProps={{
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
          autoComplete: 'confirm-password',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={() => handleFieldToggle('showConfirmPassword')}
                edge="end"
              >
                {formData?.showConfirmPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ sx: { fontSize: '11px', color: '#000' } }}
      />
    </>
  );
};

export default PasswordAndConfirmFields;
