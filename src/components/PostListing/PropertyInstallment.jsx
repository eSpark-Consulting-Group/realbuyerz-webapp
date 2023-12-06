import React, { useState } from 'react';
import { Typography, Box, Switch } from '@mui/material';
import Image from 'next/image';

import { createInstallmentState } from '@/utils/propertyInstallment';
import { useDispatch } from 'react-redux';
import {
  addInstallment,
  addPossession,
} from '@/src/redux/slices/postlisting/example';

const PropertyInstallment = ({
  propertyInstallmentInfo,
  propertyBuyingDetails,
}) => {
  const [propertyData] = useState(
    createInstallmentState(propertyInstallmentInfo, propertyBuyingDetails)
  );
  const [installment, setInstallment] = React.useState();
  const [possession, setPossession] = React.useState();
  const dispatch = useDispatch();

  const handleToggleChange = (key, val) => {
    if (key == 'instalmentAvailable') {
      setInstallment(val);
    } else {
      setPossession(val);
    }
  };

  React.useEffect(() => {
    dispatch(addInstallment(installment));
  }, [installment]);

  React.useEffect(() => {
    dispatch(addPossession(possession));
  }, [possession]);

  return (
    <>
      {propertyData.installmentData.toggleData?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '8px',
          }}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '20px',
                fontFamily: 'Inter',
                fontWeight: 400,
                gap: '8px',
              }}
            >
              <Image
                src={item.image}
                width={45}
                height={45}
                alt="installment"
              />
              <Typography
                sx={{
                  color: '#333333',
                }}
              >
                {item.title}{' '}
              </Typography>
              <span style={{ color: '#FF0000' }}>*</span>
            </Box>

            <Switch
              value={item?.value}
              onChange={(event) =>
                handleToggleChange(item?.label, event.target.checked)
              }
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                color: '#333333',
                width: { xs: '100%', md: '650px' },
                marginLeft: { xs: '20px', md: '50px' },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyInstallment;
