import React, { useEffect, useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { useSelector } from 'react-redux';

const AreaUnit = ({ measure, handleInputChange }) => {
  const areaUnits = useSelector((state) => state?.globalUnits.AREA_UNITS);
  const currencyUnits = useSelector(
    (state) => state?.globalUnits.CURRENCY_UNITS
  );

  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    const persistedValues =
      JSON.parse(localStorage.getItem('selectedUnits')) || [];
    if (measure && persistedValues.length === 0) {
      const initialValues = measure.map((item) => {
        const isCurrency = item.label.toLowerCase().includes('currency');
        return isCurrency ? currencyUnits[0]?.value : areaUnits[0]?.value;
      });
      setSelectedValues(initialValues);
    } else {
      setSelectedValues(persistedValues);
    }
  }, [measure, areaUnits, currencyUnits]);

  const handleSelectChange = (event, index, isCurrency) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = event.target.value;
    setSelectedValues(updatedValues);

    localStorage.setItem('selectedUnits', JSON.stringify(updatedValues));

    handleInputChange(event, isCurrency ? 'currencyUnit' : 'areaUnit');
  };

  return (
    <Box>
      {measure?.map((item, index) => {
        const isCurrency = item.label.toLowerCase().includes('currency');
        const units = isCurrency ? currencyUnits : areaUnits;

        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '8px',
              gap: '15px',
            }}
            key={index}
          >
            <Typography
              sx={{
                color: 'black',
                fontSize: { sm: '14px', md: '16px', lg: '20px' },
                fontWeight: 400,
              }}
            >
              {item?.label}
            </Typography>
            <FormControl fullWidth>
              <Select
                displayEmpty
                value={selectedValues[index] || ''}
                onChange={(e) => handleSelectChange(e, index, isCurrency)}
                variant="outlined"
                sx={{
                  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: '#E7E7E7',
                  },
                }}
              >
                {units?.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      })}
    </Box>
  );
};

export default AreaUnit;
