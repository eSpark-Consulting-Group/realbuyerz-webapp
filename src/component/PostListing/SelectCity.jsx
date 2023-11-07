import React, { useState } from 'react';
import { Typography, Box, TextField, MenuItem } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from './postlistingConstants';

const SelectCityType = ({image,label}) => {
  const [value, setValue] = useState('');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: 400,
          gap: '8px',

        }}
      >
        <Image src={image} width={47} height={45} />
        <Typography
          sx={{
            color: '#333333',

          }}
        >
          {label}{' '}
        </Typography>
        <span style={{ color: '#FF0000' }}>*</span>
      </Box>
      <TextField
        sx={{
          width: { xs: '100%', md: '400px' },
          color: '#777777',
          marginLeft: { xs: "0px", md: "50px" }
        }}
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        select
        label="Select City"
      >
        <MenuItem key={1} value="test0">
          None
        </MenuItem>
        <MenuItem key={2} value="test1">
          Test 1
        </MenuItem>
        <MenuItem key={3} value="test2">
          Test 2
        </MenuItem>
      </TextField>
    </>
  );
};
export default SelectCityType;
