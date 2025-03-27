import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const TooltipText = ({
  text,
  typographyStyle,
  maxLength = 13,
  variant = 'secondary',
}) => {
  const isTooltipVisible = text?.length > maxLength;
  return (
    <Tooltip title={isTooltipVisible ? text : ''}>
      <Typography sx={typographyStyle} variant={variant}>
        {`${text ? text?.toString()?.slice(0, maxLength) : ''}${isTooltipVisible ? '...' : ''}`}
      </Typography>
    </Tooltip>
  );
};

export default TooltipText;
