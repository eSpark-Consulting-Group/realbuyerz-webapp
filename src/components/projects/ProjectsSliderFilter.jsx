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
  selectedUnit,
  selectedRange,
  handleRange,
  handleUnit,
}) => {
  const [selectUnit, setSelectUnit] = useState(selectedUnit);
  const [selectRange, setSelectRange] = useState(selectedRange);

  const handleUnitChange = (event) => {
    setSelectUnit(event.target.value);
  };

  const handleMinAreaChange = (event) => {
    const minValue = event.target.value;
    const newRange = [parseFloat(minValue), selectRange[1]];
    setSelectRange(newRange);
  };

  const handleMaxAreaChange = (event) => {
    const maxValue = event.target.value;
    const newRange = [selectRange[0], parseFloat(maxValue)];
    setSelectRange(newRange);
  };

  const handleRangeChange = (_, newRange) => {
    setSelectRange(newRange);
  };

  const handleApply = () => {
    selectedUnit = selectUnit;
    selectedRange = selectRange;
    handleRange('area', selectRange);
    handleUnit('unit', selectUnit);
  };

  const handleCancel = () => {
    setSelectUnit(selectUnit);
    setSelectRange(selectedRange);
    handleRange('area', ['0', '5000']);
    handleUnit('unit', units[0].value);
  };

  return (
    <Box
      zIndex={1000}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '20px',
        borderRadius: '5px',
        boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.25)',
        width: '450px',
        backgroundColor: '#fff',
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
        <Typography variant={'h4'} sx={{ color: '#2E2E2E' }}>
          {title}
        </Typography>
        <Box sx={{ width: '100px' }}>
          <Select
            id="units"
            value={selectUnit}
            onChange={handleUnitChange}
            fullWidth
          >
            {units.map((unit, index) => (
              <MenuItem key={index} value={unit.value}>
                {unit.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-around',
          alignItems: 'center',
          gap: '50px',
        }}
      >
        <TextField
          id="minArea"
          variant="outlined"
          value={selectRange[0]}
          onChange={handleMinAreaChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '40px',
              width: '150px',
              '& fieldset': {
                borderColor: '#E7E7E7',
              },
              '&:hover fieldset': {
                borderColor: '#E7E7E7',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#E7E7E7',
              },
            },
          }}
        />
        <Typography variant={'h6'} sx={{ color: '#2E2E2E' }}>
          To
        </Typography>
        <TextField
          id="maxArea"
          variant="outlined"
          value={selectRange[1]}
          onChange={handleMaxAreaChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '40px',
              width: '150px',
              '& fieldset': {
                borderColor: '#E7E7E7',
              },
              '&:hover fieldset': {
                borderColor: '#E7E7E7',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#E7E7E7',
              },
            },
          }}
        />
      </Box>

      <Box>
        <FormControl
          sx={{ width: '316px', margin: '0 50px', padding: '10px 0' }}
        >
          <Slider
            value={selectRange}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
            sx={{
              color: '#47B2FF',
              '& .MuiSlider-thumb': {
                backgroundColor: '#C7D3EB',
                border: '4px solid #47B2FF',
                '&:hover, &:active, &:focus': {
                  boxShadow: 'none',
                },
              },
              '& .MuiSlider-thumb.Mui-active': {
                backgroundColor: '#C7D3EB',
              },
            }}
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
