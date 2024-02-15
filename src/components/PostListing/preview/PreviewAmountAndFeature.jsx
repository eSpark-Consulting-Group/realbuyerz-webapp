import React from 'react';
import { Box, Typography } from '@mui/material';

const PreviewAmountAndFeature = ({
  area,
  amount,
  areaAndAmount,
  instalmentAvailable,
  readyPossession,
}) => {
  return (
    <>
      {areaAndAmount && amount > 0 && (
        <Box
          sx={{
            p: 5,
            borderBottom: '1px solid #E4E4E4',
            '@media(min-width:280px) and (max-width:400px)': { px: 3 },
          }}
        >
          <Typography sx={{ fontSize: { xs: '20px' }, fontWeight: 500, mb: 1 }}>
            {areaAndAmount?.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {areaAndAmount?.areaSize}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {area && area}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {areaAndAmount?.range}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {amount && amount}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {areaAndAmount?.installment}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {instalmentAvailable == true ? 'Available' : null}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {areaAndAmount?.readyfor}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {readyPossession == true ? 'Possession' : null}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PreviewAmountAndFeature;
