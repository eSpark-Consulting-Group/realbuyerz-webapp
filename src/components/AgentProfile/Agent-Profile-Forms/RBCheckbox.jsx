import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RBCheckbox({ label, defaultChecked, sx }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox sx={sx} defaultChecked={defaultChecked} />}
        label={label}
      />
    </FormGroup>
  );
}
