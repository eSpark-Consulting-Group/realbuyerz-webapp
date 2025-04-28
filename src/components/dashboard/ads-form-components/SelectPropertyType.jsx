'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Box, Button } from '@mui/material';

import PropertyTypes from './PropertyPlot';
import LabelDisplay from './LabelDisplay';

import { fetchPropertyTypes } from '@/src/utils/properties';

import { boxStyles } from './styles';

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
      toast.error(error.response.data.messag);
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
        ...boxStyles('auto'),
        pb: { xs: 2, sm: 2, xl: 0 },
        cursor: 'pointer',
      }}
    >
      <LabelDisplay text={label} image={image} alt={'properttype'} isMobile />

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
          <LabelDisplay text={label} mb={2} />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-evenly', sm: 'start' },
              gap: { xs: 1, sm: 2 },
              marginBottom: '-8px',
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

          <hr style={{ width: '100%', border: '1px solid #E7E7E7' }} />

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
