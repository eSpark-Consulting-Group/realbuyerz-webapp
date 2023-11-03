import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';

export default function RBSelect({
  label,
  onChange,
  value,
  name,
  menuItem,
  sx,
}) {
  return (
    menuItem && (
      <>
        <FormControl>
          {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={name}
            value={value}
            // label={label}
            onChange={onChange}
            defaultValue={'hasasn'}
            sx={sx}
          >
            {menuItem?.map((items, i) => (
              <MenuItem key={i} value={items?.icon}>
                <Image src={items?.icon} width={30} height={30} alt="image" />
                {/* {items} */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    )
  );
}
