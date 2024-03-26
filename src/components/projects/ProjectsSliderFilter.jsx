'use client';
import React, { useState } from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import ProjectsFilterApplicatonButtons from './ProjectsFilterApplicatonButtons';

const ProjectsSliderFilter = ({
  title,
  units,
  handleChange,
}) => {
  // Initialize state for selected unit and range
  const [selectedUnit, setSelectedUnit] = useState(units[0]?.value);
  const [selectedRange, setSelectedRange] = useState([0, 5000]);

  // Event handlers for changing selected unit and range
  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    handleChange(event);
  };

  const handleMinAreaChange = (event) => {
    const minValue = event.target.value;
    const newRange = [parseFloat(minValue), selectedRange[1]];
    setSelectedRange(newRange);
  };

  const handleMaxAreaChange = (event) => {
    const maxValue = event.target.value;
    const newRange = [selectedRange[0], parseFloat(maxValue)];
    setSelectedRange(newRange);
  };

  const handleRangeChange = (_, newRange) => {
    setSelectedRange(newRange);
  };

  // Internal function for applying filter
  const handleApply = () => {
    console.log('Applying filter with range:', selectedRange);
    // Add logic to apply filter
  };

  // Internal function for canceling filter
  const handleCancel = () => {
    console.log('Canceling filter');
    // Add logic to cancel filter
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
          value={selectedUnit}
          onChange={handleUnitChange}
        >
          {units.map((unit, index) => (
            <MenuItem key={index} value={unit.value}>
              {unit.title}
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
      <ProjectsFilterApplicatonButtons
        apply={handleApply}
        cancel={handleCancel}
      />
    </Box>
  );
};

export default ProjectsSliderFilter;
