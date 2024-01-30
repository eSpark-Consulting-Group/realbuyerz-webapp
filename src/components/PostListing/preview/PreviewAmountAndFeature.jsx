import React from 'react';
import { Box, Typography } from '@mui/material';

const PreviewAmountAndFeature = ({
  amountData,
  amenities,
  PricingValues,
  FeatureValues,
}) => {
  return (
    <>
      {amountData && (
        <Box
          sx={{
            p: 5,
            borderBottom: '1px solid #E4E4E4',
            '@media(min-width:280px) and (max-width:400px)': { px: 3 },
          }}
        >
          <Typography sx={{ fontSize: { xs: '20px' }, fontWeight: 500 }}>
            {amountData?.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amountData?.range}:
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {PricingValues?.amount?.amount
                ? PricingValues?.amount?.amount
                : 0}
            </Typography>
          </Box>
        </Box>
      )}

      {amenities && (
        <Box
          sx={{
            p: 5,
            borderBottom: '1px solid #E4E4E4',
            '@media(min-width:280px) and (max-width:400px)': { px: 3 },
          }}
        >
          <Typography sx={{ fontSize: { xs: '20px' }, fontWeight: 500 }}>
            {amenities?.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.bedrooms}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeatureValues?.bedrooms}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.bathrooms}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeatureValues?.bathrooms}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.parking}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeatureValues?.parking}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PreviewAmountAndFeature;
