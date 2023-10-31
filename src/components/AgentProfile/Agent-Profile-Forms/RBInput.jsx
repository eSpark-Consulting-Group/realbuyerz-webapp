import { FormHelperText, TextField, Typography } from '@mui/material';
import React from 'react';

const RBInput = ({ label, fullWidth, defaultValue, id, sx, helperText }) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        fullWidth={fullWidth}
        sx={sx}
        id={id}
        defaultValue={defaultValue}
      />
      <FormHelperText id="component-helper-text">{helperText}</FormHelperText>
    </div>
  );
};

export default RBInput;
