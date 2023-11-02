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
}) => {
  return (
    <Box sx={{width:"100%"}}>
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
    </Box>
  );
};

export default RBInput;
