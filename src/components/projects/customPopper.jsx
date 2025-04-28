import React from 'react';
import { Popper } from '@mui/material';

const CustomPopper = (props) => (
  <Popper
    {...props}
    sx={{
      boxShadow: '0px 0px 10px 0px #00000040',
    }}
  />
);

export default CustomPopper;
