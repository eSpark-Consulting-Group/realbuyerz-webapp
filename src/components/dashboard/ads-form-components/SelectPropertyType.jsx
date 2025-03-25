'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import PropertyTypes from './PropertyPlot';
import { useMutation } from '@tanstack/react-query';
import { fetchPropertyTypes } from '@/src/utils/properties';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';

const SelectProperyType = ({ image, label, formik, propertyTypeDetails }) => {
  const pathname = usePathname();
  const [activePropertyType, setActivePropertyType] = useState('');
  const [activePropertySubType, setActivePropertySubType] = useState(null);
  const [propertyTp, setPropertyTp] = useState([]);

  const handlePropertyType = (text) => {
    setActivePropertyType(text);
    formik?.setFieldValue('propertyCategory', text);
  };

  const handlePropetySubType = (propertySubTypeData) => {
    setActivePropertySubType(propertySubTypeData?.subTypeName);
    formik?.setFieldValue('propertySubTypeId', propertySubTypeData?.id);
  };

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate } = useMutation({
    mutationFn: fetchPropertyTypes,
    onSuccess: (data) => {
      setPropertyTp(data.response.data);
    },
    onError: (error) => {
      // Handle the error
      toast.error(error.response.data.messag)
    },
  });

  useEffect(() => {
    if (pathname.includes('update')) {
      if (propertyTypeDetails) {
        handlePropertyType(propertyTypeDetails?.propertyType?.typeName);
        handlePropetySubType(propertyTypeDetails);
      }
    } else if (propertyTp.length) {
      handlePropertyType(propertyTp[0]?.typeName);
      handlePropetySubType(propertyTp[0]?.subTypes[0]);
    }
  }, [pathname, propertyTp, propertyTypeDetails?.propertyType]);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'start' },
        justifyContent: { xs: 'center', md: 'center' },
        gap: 2,
        pb: { xs: 2, sm: 2, xl: 0 },
        cursor: 'pointer',
      }}
    >
      <Box sx={{ width: { xs: '90%', sm: '45px' }, pl: '0 !important' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: 1.5,
          }}
        >
          <Box
            component={'img'}
            sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
            src={image}
            alt={'properttype'}
          />
          <Typography
            sx={{
              fontSize: { xs: '17px', sm: '20px' },
              fontWeight: 400,
              color: '#333333',
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mt: 0.8,
            mb: { xs: 3, xl: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '17px', sm: '20px' },
              fontWeight: 400,
              color: '#333333',
              mb: 2,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {label}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-evenly', sm: 'start' },
              gap: { xs: 1, sm: 2 },
            }}
          >
            {propertyTp.map((val, index) => (
              <Button
                key={index}
                sx={{
                  fontSize: { xs: '15px', sm: '20px' },
                  fontWeight: 400,
                  color:
                    activePropertyType === val?.typeName ? '#FB631C' : '#666',
                  position: 'relative',
                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -8,
                    borderBottom: `3px solid ${activePropertyType === val?.typeName ? '#FB631C' : 'transparent'}`,
                  },
                }}
                onClick={() => handlePropertyType(val?.typeName)}
              >
                {val?.typeName}
              </Button>
            ))}
          </Box>
          <hr style={{ width: '100%' }} />
          {propertyTp
            .filter((val) => val?.typeName === activePropertyType)
            .map((val, index) => (
              <PropertyTypes
                key={index}
                data={val?.subTypes}
                handlePropetySubType={handlePropetySubType}
                activePropertySubType={activePropertySubType}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectProperyType;
