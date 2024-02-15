import React from 'react';
import { Box, Typography } from '@mui/material';

import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';

const CheckBoxDescription = ({
  checked,
  setChecked,
  handleChangeCheckBox,
  checkBoxLable,
}) => {
  return (
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
        {checkBoxLable}
      </Typography>
    </Box>
  );
};

export default CheckBoxDescription;
