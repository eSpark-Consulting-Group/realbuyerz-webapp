import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RBCheckbox({ label, defaultChecked, sx, onChange }) {
  return (
    <FormControlLabel
      control={<Checkbox sx={sx} defaultChecked={defaultChecked} />}
      label={label}
      onChange={onChange}
    />
  );
}
