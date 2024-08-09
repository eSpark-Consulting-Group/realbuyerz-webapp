import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RBCheckbox({
  label,
  defaultChecked,
  sx,
  checked,
  onChange,
  labelStyle,
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={sx}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
        />
      }
      sx={labelStyle}
      label={label}
    />
  );
}
