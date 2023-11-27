import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BuyConnectSelect({
  sx,
  name,
  value,
  menuItem,
  onChange,
  placeHolder,
}) {
  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          placeHolder={placeHolder}
          value={value}
          onChange={onChange}
          sx={sx}
        >
          {menuItem?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.item == 0
                ? item?.item
                : item?.item + ' ' + 'for' + ' ' + item?.price}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
