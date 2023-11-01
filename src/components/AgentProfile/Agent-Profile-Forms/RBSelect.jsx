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
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    menuItem && (
      <Box sx={sx}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={name}
            value={value}
            label={label}
            onChange={onChange}
          >
            {menuItem?.map((items, i) => (
              <MenuItem key={i} value={items}>
                {/* <Image src={items} /> */}
                {items}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    )
  );
}
