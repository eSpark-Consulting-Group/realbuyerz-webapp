'use client';
import React, { useState } from 'react';
import { Typography, Box, Switch } from '@mui/material';

import { createInstallmentState } from '@/utils/propertyInstallment';

const PropertyInstallment = ({
  propertyInstallmentInfo,
  propertyBuyingDetails,
  formik,
}) => {
  const [propertyData] = useState(
    createInstallmentState(propertyInstallmentInfo, propertyBuyingDetails)
  );

  return (
    <>
      {propertyData?.installmentData?.toggleData?.map((item, index) => (
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'start' },
            justifyContent: { xs: 'center', md: 'center' },
            gap: 2,
            pb: { xs: 2, sm: 2 },
          }}
          key={index}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '45px' },
              pl: '0 !important',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                component={'img'}
                src={item?.image}
                sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
                alt={'installment'}
              />
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
                  display: { xs: 'flex', sm: 'none' },
                }}
              >
                {item?.title}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mb: 1.5,
              width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                mt: 0.6,
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                {item?.title}
              </Typography>
              <Switch
                checked={formik?.values[item?.label]}
                onChange={(event) => {
                  formik?.setFieldValue(item?.label, event.target.checked);
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                fontWeight: 400,
                color: '#666',
              }}
            >
              {item?.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyInstallment;
