import React from 'react';
import { Box, Typography } from '@mui/material';

const ClientRequirementAmount = ({ amount, featuresAndAmenities }) => {
  return (
    <>
      {amount && (
        <Box sx={{ p: 5, borderBottom: '1px solid #E4E4E4' }}>
          <Typography
            sx={{ fontSize: { xs: '15px', sm: '20px' }, fontWeight: 500 }}
          >
            {amount?.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              {amount?.rangeText}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
            >
              {amount?.range}
            </Typography>
          </Box>
        </Box>
      )}
      {featuresAndAmenities && (
        <Box sx={{ p: 5, borderBottom: '1px solid #E4E4E4' }}>
          <Typography
            sx={{ fontSize: { xs: '15px', sm: '20px' }, fontWeight: 500 }}
          >
            {featuresAndAmenities?.title}
          </Typography>
          {featuresAndAmenities?.selectedFeatures &&
            featuresAndAmenities?.selectedFeatures?.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  {item?.title}
                </Typography>
                <Typography
                  sx={{ fontSize: '14px', fontWeight: 500, color: '#126FAA' }}
                >
                  {item?.value}
                </Typography>
              </Box>
            ))}
        </Box>
      )}
    </>
  );
};

export default ClientRequirementAmount;
