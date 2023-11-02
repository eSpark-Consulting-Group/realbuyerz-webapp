import { FormHelperText } from '@mui/material';
import React from 'react';

const RBHelperText = ({ helperText }) => {
  return (
    <>
      {helperText && (
        <FormHelperText sx={{ p: 1 }} id="component-helper-text">
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default RBHelperText;
