import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BuyConnectSelect({
  onChange,
  value,
  name,
  menuItem,
  sx,
}) {
  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          onChange={onChange}
          sx={sx}
        >
          {menuItem?.map((items, i) => (
            <MenuItem key={i} value={items?.value}>
              {items}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
