import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const ProposalFilter = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');

  const handleClearButtonClick = () => {
    setDropdown1('');
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <Typography variant="subtitle1">Label 1</Typography>
        <FormControl fullWidth>
          <Select value={dropdown1} placeholder={'Dropdown 4'} onChange={(e) => setDropdown1(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Label 2</Typography>
        <FormControl fullWidth>
          <Select value={dropdown2} placeholder={'Dropdown 4'} onChange={(e) => setDropdown2(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Label 3</Typography>
        <FormControl fullWidth>
          <Select value={dropdown3} placeholder={'Dropdown 4'} onChange={(e) => setDropdown3(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Label 4</Typography>
        <FormControl fullWidth>
          <Select value={dropdown4} placeholder={'Dropdown 4'} onChange={(e) => setDropdown4(e.target.value)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleClearButtonClick}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProposalFilter;