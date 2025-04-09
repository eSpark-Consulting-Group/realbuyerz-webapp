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

const SizeMenu = ({
  filterObject,
  setfilterObject,
  handleClose,
  setAnchorEl,
}) => {
  const [minArea, setMinArea] = useState(filterObject?.size?.minimum || '');
  const [maxArea, setMaxArea] = useState(filterObject?.size?.maximum || '');
  const [unit, setUnit] = useState(filterObject?.size?.unit || 'Marla');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const unitLimits = {
    Marla: { minimum: 1, maximum: 100 },
    Kanal: { minimum: 0.5, maximum: 20 },
    'Square Feet': { minimum: 100, maximum: 50000 },
  };

  const handleApply = () => {
    setfilterObject({
      ...filterObject,
      size: { minimum: minArea, maximum: maxArea, unit: unit },
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
        alignItems={'center'}
        mb={2}
      >
        <Typography fontWeight={600}>Area</Typography>
        <Select
          value={unit}
          onChange={(e) => {
            setMinArea('');
            setMaxArea('');
            setUnit(e?.target?.value);
          }}
          size="small"
          sx={{ minWidth: 100 }}
        >
          <MenuItem value="Marla">Marla</MenuItem>
          <MenuItem value="Kanal">Kanal</MenuItem>
          <MenuItem value="Square Feet">Sq. Ft</MenuItem>
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
          inputProps={{
            min: 0,
            max: unitLimits[unit]?.maximum,
          }}
          onChange={(e) => {
            const value = e?.target?.value;
            if (value <= unitLimits[unit]?.maximum) {
              setMinArea(value);
            }
          }}
          fullWidth
          InputProps={{ sx: { borderRadius: 1 } }}
        />
        <Typography
          align={isSmallScreen ? 'center' : 'inherit'}
          sx={{ mx: isSmallScreen ? 0 : 1 }}
        >
          To
        </Typography>
        <TextField
          fullWidth
          size="small"
          type="number"
          placeholder="Any"
          value={maxArea}
          inputProps={{
            min: 0,
            max: unitLimits[unit]?.maximum,
          }}
          onChange={(e) => {
            const value = e?.target?.value;
            if (value <= unitLimits[unit]?.maximum) {
              setMaxArea(value);
            }
          }}
          InputProps={{ sx: { borderRadius: 1 } }}
        />
      </Stack>

      <Slider
        value={[Number(minArea), Number(maxArea || minArea)]}
        onChange={(e, newValue) => {
          setMinArea(newValue[0]);
          setMaxArea(newValue[1]);
        }}
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
          sx={{
            width: { xs: '100px', md: '120px', lg: '150px' },
            height: '45px',
            borderRadius: '10px',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          disabled={minArea <= 0 && maxArea <= 0}
          onClick={handleApply}
          variant="contained"
          color="warning"
          sx={{
            width: { xs: '100px', md: '120px', lg: '150px' },
            height: '45px',
            borderRadius: '10px',
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default SizeMenu;
