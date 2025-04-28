'use client';
import { useState } from 'react';

import { Typography, Box } from '@mui/material';

import LabelDisplay from './LabelDisplay';

import {
  AntSwitch,
  createInstallmentState,
} from '@/src/utils/propertyInstallment';

import { boxStyles } from './styles';

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
            ...boxStyles('auto', 2),
          }}
          key={index}
        >
          <LabelDisplay
            text={item?.title}
            image={item?.image}
            alt={'installment'}
            isMobile
          />

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
              <LabelDisplay text={item?.title} />

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
