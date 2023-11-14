import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BuyConnectSelect({
  // handleChange,
  // value,
  name,
  // menuItem,
  sx,
}) {
  const [age, setAge] = React.useState(0);

  const handleChange = (e) => {
    console.log('abcdefgh', e.target.value);
    setAge(e.target.value);
  };
  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={age}
          onChange={handleChange}
          sx={sx}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
          <MenuItem value={2500}>2500</MenuItem>
          <MenuItem value={3500}>3500</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
