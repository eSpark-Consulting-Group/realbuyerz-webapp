import React, { useState } from 'react';
import { Typography, Box, Switch, Button } from '@mui/material';
import Image from 'next/image';

import { createInstallmentState } from '@/utils/propertyInstallment';
import { useDispatch } from 'react-redux';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';

const PropertyInstallment = ({
  propertyInstallmentInfo,
  propertyBuyingDetails,
}) => {
  const [propertyData, setPropertyData] = useState(
    createInstallmentState(propertyInstallmentInfo, propertyBuyingDetails)
  );

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: savePropertyData,
      payload: propertyData.installmentData.sellingData,
    });
    console.log(propertyData);
  };
  const handleInputChangeToggle = (name, checked) => {
    setPropertyData((prevData) => {
      const updatedToggleData = prevData.installmentData.toggleData.map(
        (item) => (item.label === name ? { ...item, value: checked } : item)
      );
      const updatedSellingData = {
        ...prevData.installmentData.sellingData,
        [name]: checked,
      };

      return {
        ...prevData,
        installmentData: {
          toggleData: updatedToggleData,
          sellingData: updatedSellingData,
        },
      };
    });
  };
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
              value={item.value}
              onChange={(event) =>
                handleInputChangeToggle(item.label, event.target.checked)
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
      <Button onClick={handleClick}>Ok</Button>
    </>
  );
};
export default PropertyInstallment;
