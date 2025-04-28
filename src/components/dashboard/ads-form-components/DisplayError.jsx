import { Typography } from '@mui/material';

const DisplayError = ({
  doubleCheck,
  formik,
  errorLabel,
  extra = {},
  errorText = '',
}) => {
  return (
    <>
      {(doubleCheck
        ? formik?.errors[errorLabel.first] || formik?.errors[errorLabel?.second]
        : formik?.errors[errorLabel.first]) && (
        <Typography
          sx={{
            color: 'red',
            ...extra,
          }}
        >
          {errorText || formik?.errors[errorLabel.first]}
        </Typography>
      )}
    </>
  );
};

export default DisplayError;
