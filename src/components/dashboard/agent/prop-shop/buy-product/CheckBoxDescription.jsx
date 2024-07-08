import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

import RBCheckbox from '../../../RBCheckbox';

const CheckBoxDescription = ({
  checked,
  setChecked,
  handleChangeCheckBox,
  checkBoxLabel,
  saveCardTitle,
  setSaveCardTitle,
}) => {
  const handleSaveCardInputChange = (e) => {
    setSaveCardTitle(e.target.value);
  };
  return (
    <>
      {checked && (
        <Grid item xs={12} sx={{ px: 5, py: 1 }}>
          <TextField
            id="saveCardTitle"
            name="saveCardTitle"
            placeholder="Save Card Title"
            type="text"
            variant="outlined"
            value={saveCardTitle}
            onChange={handleSaveCardInputChange}
            fullWidth
          />
        </Grid>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 1, md: 3, lg: 5 },
        }}
      >
        <RBCheckbox
          sx={{ mr: '-15px' }}
          checked={checked}
          onChange={handleChangeCheckBox}
          setChecked={setChecked}
        />
        <Typography
          sx={{
            color: '#333',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          {checkBoxLabel}
        </Typography>
      </Box>
    </>
  );
};

export default CheckBoxDescription;
