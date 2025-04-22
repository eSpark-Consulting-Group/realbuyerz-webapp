'use client';
import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';

const unitOptions = ['Marla', 'Kanal', 'Square Feet'];
const unitLimits = {
  Marla: { minimum: 1, maximum: 100 },
  Kanal: { minimum: 0.5, maximum: 20 },
  'Square Feet': { minimum: 100, maximum: 50000 },
};

const inputSx = { borderRadius: 1 };
const buttonSx = {
  width: { xs: '100px', md: '120px', lg: '150px' },
  height: '45px',
  borderRadius: '10px',
};

const SizeMenu = ({
  filterObject,
  setfilterObject,
  handleClose,
  setAnchorEl,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const [unit, setUnit] = useState(filterObject?.size?.unit || 'Marla');
  const [minArea, setMinArea] = useState(filterObject?.size?.minimum || '');
  const [maxArea, setMaxArea] = useState(filterObject?.size?.maximum || '');

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    setMinArea('');
    setMaxArea('');
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    const limit = unitLimits[unit]?.maximum;

    if (value === '' || Number(value) <= limit) {
      setter(value);
    }
  };

  const handleSliderChange = (_, newValue) => {
    setMinArea(newValue[0]);
    setMaxArea(newValue[1]);
  };

  const handleApply = () => {
    setfilterObject({
      ...filterObject,
      size: {
        minimum: minArea,
        maximum: maxArea,
        unit,
      },
    });
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: '#fff',
        mx: 'auto',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontWeight={600}>Area</Typography>
        <Select
          size="small"
          value={unit}
          onChange={(e) => handleUnitChange(e.target.value)}
          sx={{ minWidth: 100 }}
        >
          {unitOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option === 'Square Feet' ? 'Sq. Ft' : option}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        spacing={1}
        alignItems={isSmallScreen ? 'stretch' : 'center'}
        mb={2}
      >
        <TextField
          size="small"
          type="number"
          placeholder="0"
          value={minArea}
          onChange={handleInputChange(setMinArea)}
          inputProps={{ min: 0, max: unitLimits[unit]?.maximum }}
          fullWidth
          InputProps={{ sx: inputSx }}
        />
        <Typography
          align={isSmallScreen ? 'center' : 'inherit'}
          sx={{ mx: isSmallScreen ? 0 : 1 }}
        >
          To
        </Typography>
        <TextField
          size="small"
          type="number"
          placeholder="Any"
          value={maxArea}
          onChange={handleInputChange(setMaxArea)}
          inputProps={{ min: 0, max: unitLimits[unit]?.maximum }}
          fullWidth
          InputProps={{ sx: inputSx }}
        />
      </Stack>

      <Slider
        value={[
          Number(minArea || unitLimits[unit]?.minimum),
          Number(maxArea || unitLimits[unit]?.minimum),
        ]}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        min={unitLimits[unit]?.minimum}
        max={unitLimits[unit]?.maximum}
        sx={{ width: '90%', mx: 'auto', color: '#3fb9ff', mb: 3 }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', lg: 'flex-end' },
          gap: 2,
          px: 2,
        }}
      >
        <Button
          variant="outlined"
          color="warning"
          sx={buttonSx}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="warning"
          sx={buttonSx}
          onClick={handleApply}
          disabled={minArea <= 0 && maxArea <= 0}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default SizeMenu;
