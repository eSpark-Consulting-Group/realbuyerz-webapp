'use client';
import React, { useState } from 'react';
import { Typography, Box, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

import { createInstallmentState } from '@/utils/propertyInstallment';

const PropertyInstallment = ({
  propertyInstallmentInfo,
  propertyBuyingDetails,
  formik,
}) => {
  const [propertyData] = useState(
    createInstallmentState(propertyInstallmentInfo, propertyBuyingDetails)
  );

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 43,
    height: 24,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 20,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(14px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(18px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#177ddc' : '#fb631c',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 20,
      height: 20,
      borderRadius: 10,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 28 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,.35)'
          : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

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
              <AntSwitch
                checked={formik?.values[item?.label]}
                onChange={(event) => {
                  formik?.setFieldValue(item?.label, event.target.checked);
                }}
                inputProps={{ 'aria-label': 'ant design' }}
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
