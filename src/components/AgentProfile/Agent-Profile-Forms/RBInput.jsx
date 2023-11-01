import { FormHelperText, TextField, Typography } from '@mui/material';
import React from 'react';

const RBInput = ({
  label,
  place,
  defaultValue,
  id,
  sx,
  helperText,
  type,
  rows,
}) => {
  return (
    <div>
      <TextField
        fullWidth
        type={type}
        sx={sx}
        id={id}
        label={label}
        placeholder={place}
        defaultValue={defaultValue}
        multiline
        rows={rows}
      />
      {helperText && (
        <FormHelperText sx={{ p: 1 }} id="component-helper-text">
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};

export default RBInput;
