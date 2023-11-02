import { FormHelperText, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
  multiline,
}) => {
  return (
    <>
      <TextField
        fullWidth
        type={type}
        sx={sx}
        id={id}
        label={label}
        placeholder={place}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
      />
    </>
  );
};

export default RBInput;
