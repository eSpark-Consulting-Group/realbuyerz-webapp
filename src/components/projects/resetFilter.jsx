import React from 'react';
import { Typography } from '@mui/material';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';

const ResetFilter = ({ handleReset }) => (
  <>
    <Typography
      onClick={handleReset}
      sx={{
        display: { xs: 'none', lg: 'flex' },
        fontSize: '16px',
        fontWeight: 500,
        color: '#126FAA',
        textDecoration: 'underline',
        textWrap: 'nowrap',
        cursor: 'pointer',
        pl: 3,
      }}
    >
      Clear filter
    </Typography>
    <FilterAltOffRoundedIcon
      onClick={handleReset}
      sx={{
        display: { xs: 'flex', lg: 'none' },
        height: '32px',
        width: 'auto',
        color: '#126FAA',
        cursor: 'pointer',
      }}
    />
  </>
);

export default ResetFilter;
