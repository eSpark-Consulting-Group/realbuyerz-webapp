import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import Counter from './inputNumber/counter';
import { useSelector } from 'react-redux';

const PropertyFacilities = ({ propertyInformation, formik }) => {
  const amenitiesSelected = useSelector((state) => state?.postListingAds?.adAmenities);
  return (
    <>
      {propertyInformation?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            fontSize: { xs: '18px', md: '20px' },
            fontWeight: 400,
            gap: { xs: '0px', md: '8px' },
          }}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              width: { xs: 'auto', md: 'auto' },
            }}
          >
            <Image src={item?.image} width={50} height={50} alt="facility" />
            <Box
              sx={{
                display: 'flex',
                width: 'auto',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                textAlign: { xs: 'center', sm: 'start' },
                gap: 1,
              }}
            >
              <Box sx={{ width: '130px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                  {item?.title}
                </Typography>
              </Box>
              <Box sx={{ width: 'auto' }}>
                <Counter
                  formik={formik}
                  name={item?.name}
                  title={item?.title}
                  limit={item?.limit}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      {amenitiesSelected.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            fontSize: { xs: '18px', md: '20px' },
            fontWeight: 400,
            gap: { xs: '0px', md: '8px' },
          }}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              width: { xs: 'auto', md: 'auto' },
            }}
          >
            <Image src={item?.image} width={50} height={50} alt="facility" />
            <Box
              sx={{
                display: 'flex',
                width: 'auto',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                textAlign: { xs: 'center', sm: 'start' },
                gap: 1,
              }}
            >
              <Box sx={{ width: '130px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                  {item.text}
                </Typography>
              </Box>
              <Box sx={{ width: 'auto' }}>
                <Counter
                  formik={formik}
                  name={item?.name}
                  title={item?.text}
                  limit={item?.limit}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ))
      }
    </>
  );
};
export default PropertyFacilities;
