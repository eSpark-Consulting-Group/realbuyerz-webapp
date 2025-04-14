'use client';
import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  Slider,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';

const PriceMenu = ({
  filterObject,
  setfilterObject,
  handleClose,
  setAnchorEl,
}) => {
  const [minPrice, setMinPrice] = useState(filterObject?.price?.minimum);
  const [maxPrice, setMaxPrice] = useState(filterObject?.price?.maximum);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down('lg'));
  const handleApply = () => {
    setfilterObject({
      ...filterObject,
      price: { minimum: minPrice, maximum: maxPrice },
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
          value={minPrice}
          inputProps={{ min: 0, max: 100000 }}
          onChange={(e) => {
            const value = e?.target?.value;
            if (value?.length <= 6 && Number(value) <= 100000) {
              setMinPrice(value);
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
          value={maxPrice}
          inputProps={{ min: 0, max: 100000 }}
          onChange={(e) => {
            const value = e?.target?.value;
            if (value?.length <= 6 && Number(value) <= 100000) {
              setMaxPrice(value);
            }
          }}
          InputProps={{ sx: { borderRadius: 1 } }}
        />
      </Stack>
      <Slider
        value={[Number(minPrice), Number(maxPrice || 0)]}
        onChange={(e, newValue) => {
          setMinPrice(newValue[0]);
          setMaxPrice(newValue[1]);
        }}
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
          disabled={minPrice <= 0 && maxPrice <= 0}
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

export default PriceMenu;
