import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ClientRequirementAmount = ({ amountData, amenities }) => {
  const buyingSellingForm = useSelector((state) => state.buyingSellingForm);
  const { PropertySizeAndPricing, FeaturesAndAmenities } = buyingSellingForm;
  // const { amount } = PropertySizeAndPricing;
  // const { bathrooms, bedrooms, parking } = FeaturesAndAmenities;

  return (
    <>
      {amountData && (
        <Box sx={{ p: 5, borderBottom: '1px solid #E4E4E4' }}>
          <Typography
            sx={{ fontSize: { xs: '15px', sm: '20px' }, fontWeight: 500 }}
          >
            {amountData?.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amountData?.range}:
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {PropertySizeAndPricing?.amount?.amount
                ? `${PropertySizeAndPricing?.amount?.amount} ${PropertySizeAndPricing?.amount?.unit}`
                : 0}
            </Typography>
          </Box>
        </Box>
      )}

      {amenities && (
        <Box sx={{ p: 5, borderBottom: '1px solid #E4E4E4' }}>
          <Typography
            sx={{ fontSize: { xs: '15px', sm: '20px' }, fontWeight: 500 }}
          >
            {amenities?.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.bedrooms}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeaturesAndAmenities?.bedrooms
                ? FeaturesAndAmenities?.bedrooms
                : 0}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.bathrooms}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeaturesAndAmenities?.bathrooms
                ? FeaturesAndAmenities?.bathrooms
                : 0}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amenities?.parking}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {FeaturesAndAmenities?.parking
                ? FeaturesAndAmenities?.parking
                : 0}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ClientRequirementAmount;
