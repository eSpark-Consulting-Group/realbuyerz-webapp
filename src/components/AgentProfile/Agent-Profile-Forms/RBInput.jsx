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
  value,
  type,
  name,
  rows,
  multiline,
  onChange,
}) => {
  return (
    <>
      <TextField
        fullWidth
        type={type}
        sx={sx}
        id={id}
        name={name}
        value={value}
        label={label}
        placeholder={place}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
        onChange={onChange}
      />
    </>
  );
};

export default RBInput;
