'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Slider,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';

const PriceMenu = ({
  filterObject,
  setfilterObject,
  handleClose,
  setAnchorEl,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const [minPrice, setMinPrice] = useState(filterObject?.price?.minimum || 0);
  const [maxPrice, setMaxPrice] = useState(filterObject?.price?.maximum || 0);

  const handlePriceChange = (setter) => (e) => {
    const value = e.target.value;
    if (value.length <= 6 && Number(value) <= 100000) {
      setter(value);
    }
  };

  const handleSliderChange = (_, [min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleApply = () => {
    setfilterObject({
      ...filterObject,
      price: { minimum: minPrice, maximum: maxPrice },
    });
    setAnchorEl(null);
  };

  const sharedButtonStyles = {
    width: { xs: '100px', md: '120px', lg: '150px' },
    height: '45px',
    borderRadius: '10px',
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
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography fontWeight={600}>Price Range</Typography>
        <Typography fontWeight={600}>PKR</Typography>
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
          fullWidth
          value={minPrice}
          onChange={handlePriceChange(setMinPrice)}
          inputProps={{ min: 0, max: 100000 }}
          InputProps={{ sx: { borderRadius: 1 } }}
        />

        <Typography align={isSmallScreen ? 'center' : 'inherit'}>To</Typography>

        <TextField
          size="small"
          type="number"
          placeholder="Any"
          fullWidth
          value={maxPrice}
          onChange={handlePriceChange(setMaxPrice)}
          inputProps={{ min: 0, max: 100000 }}
          InputProps={{ sx: { borderRadius: 1 } }}
        />
      </Stack>

      <Slider
        value={[Number(minPrice), Number(maxPrice || 0)]}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        min={0}
        max={100000}
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
          sx={sharedButtonStyles}
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="warning"
          sx={sharedButtonStyles}
          onClick={handleApply}
          disabled={minPrice <= 0 && maxPrice <= 0}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default PriceMenu;
