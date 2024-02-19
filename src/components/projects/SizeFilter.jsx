import { PROPERTY_INFORMATION } from '@/app/constants/postListing';
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from '@mui/material/Slider';

const SizeFilter = ({
  title,
  selectedUnit,
  units,
  handleChange,
  selectedRange,
  handleRangeChange,
  handleApply,
  handleCancel,
}) => {
  console.log(selectedRange, 'selectedRange');

  const handleMinAreaChange = (event) => {
    const minValue = event.target.value;
    const newRange = [parseFloat(minValue), selectedRange[1]]; // Keep the maximum value unchanged
    handleRangeChange(null, newRange); // Call the handleRangeChange function with the new range
  };

  // Function to handle changes in the maximum area field
  const handleMaxAreaChange = (event) => {
    const maxValue = event.target.value;
    const newRange = [selectedRange[0], parseFloat(maxValue)]; // Keep the minimum value unchanged
    handleRangeChange(null, newRange); // Call the handleRangeChange function with the new range
  };
  return (
    <Box
      zIndex={999}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 0px #00000040',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography variant={'h3'}>{title}</Typography>
        <Select
          defaultValue={'any'}
          id="area"
          value={selectedUnit || units[0]?.value}
          de
          onChange={handleChange}
        >
          {units.map((unit, index) => (
            <MenuItem key={index} value={unit?.value}>
              {unit?.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-around',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <TextField
          id="minArea"
          variant="outlined"
          value={selectedRange[0]}
          onChange={handleMinAreaChange}
        />
        <Typography variant={'h3'}>to</Typography>
        <TextField
          id="maxArea"
          variant="outlined"
          value={selectedRange[1]}
          onChange={handleMaxAreaChange}
        />
      </Box>

      <Box>
        <FormControl fullWidth>
          <Slider
            value={selectedRange}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Button
          onClick={handleCancel}
          sx={{
            width: { xs: '40%', sm: '200px' },
            '@media(min-width: 280px) and (max-width:400px)': {
              width: '100%',
            },
            borderRadius: '5px',
            border: '1px solid #FB631C',
            background: '#FFF',
            color: '#FB631C',
            height: '45px',
            flexShrink: 0,
            fontSize: { xs: '12px', sm: '15px' },
            fontWeight: 400,
            '&:hover': {
              color: '#fff',
              backgroundColor: '#FB631C',
            },
          }}
        >
          {'Cancel'}
        </Button>
        <Button
          onClick={handleApply}
          sx={{
            width: { xs: '40%', sm: '200px' },
            '@media(min-width: 280px) and (max-width:400px)': {
              width: '100%',
            },
            variant: 'secondary',
            borderRadius: '5px',
            border: '1px solid #FB631C',
            color: '#fff',
            background: '#FB631C',
            height: '45px',
            flexShrink: 0,
            fontSize: { xs: '13px', sm: '15px' },
            fontWeight: 400,
            '&:hover': {
              color: '#FB631C',
              backgroundColor: '#fff',
            },
          }}
          type="submit"
        >
          {'Apply'}
        </Button>
      </Box>
    </Box>
  );
};

export default SizeFilter;
