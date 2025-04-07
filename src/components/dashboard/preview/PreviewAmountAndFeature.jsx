import React from 'react';
import { Box, Typography } from '@mui/material';

const PreviewAmountAndFeature = ({
  area,
  amount,
  areaAndAmount,
  instalmentAvailable,
  readyPossession,
  width,
  px,
  pt,
  pb,
  subPadding,
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
    <Box
      sx={{
        p: 5,
        px: px || 'none',
        pt: pt || 'none',
        pb: pb || 'none',
        borderBottom: '1px solid #E4E4E4',
        width: width || '100%',
        '@media(min-width:280px) and (max-width:400px)': {
          px: subPadding || 3,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: fontSize || '20px',
          fontWeight: fontWeight || 500,
          mb: 2,
        }}
      >
        {areaAndAmount?.title || 'Price & Features'}
      </Typography>

      {/* Area Size */}
      <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: fontWeight || 500,
            minWidth: '120px',
          }}
        >
          Area Size:
        </Typography>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: 500,
            color: '#126FAA',
          }}
        >
          {area ? `${area} Sq-ft` : 'Not specified'}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: fontWeight || 500,
            minWidth: '120px',
          }}
        >
          Price:
        </Typography>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: 500,
            color: '#126FAA',
          }}
        >
          {amount ? `PKR ${amount.toLocaleString()}` : 'Not specified'}
        </Typography>
      </Box>

      {/* Installment Available */}
      <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: fontWeight || 500,
            minWidth: '120px',
          }}
        >
          Installment:
        </Typography>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: 500,
            color: instalmentAvailable ? '#126FAA' : '#666',
          }}
        >
          {instalmentAvailable ? 'Available' : 'Not available'}
        </Typography>
      </Box>

      {/* Ready for Possession */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: fontWeight || 500,
            minWidth: '120px',
          }}
        >
          Possession:
        </Typography>
        <Typography
          sx={{
            fontSize: fontStyle || '14px',
            fontWeight: 500,
            color: readyPossession ? '#126FAA' : '#666',
          }}
        >
          {readyPossession ? 'Ready' : 'Not ready'}
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewAmountAndFeature;