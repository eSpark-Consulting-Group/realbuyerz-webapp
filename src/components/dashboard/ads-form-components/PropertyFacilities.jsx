import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import Counter from '../inputNumber/counter';
import { useSelector } from 'react-redux';

const PropertyFacilities = ({
  propertyInformation,
  formik,
  selectedAmenities,
}) => {
  // const selectedAmenities = useSelector(
  //   (state) => state?.postListingAds?.addAmenities
  // );

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          py: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          width: '100%',
          maxHeight: '1550px',
          overflowY: 'auto',
        }}
      >
        {propertyInformation?.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', sm: 'left', md: 'left' },
                alignItems: 'center',
                width: { xs: 'auto', md: 'auto' },
                py: 2,
                gap: 2,
              }}
            >
              <Image
                src={item?.image}
                width={50}
                height={50}
                alt={'facility'}
              />
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
                  <Counter formik={formik} item={item} index={index} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        {/* {selectedAmenities?.map((amenity, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'left', md: 'space-between' },
              alignItems: 'center',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 400,
              gap: { xs: '0px', md: '8px' },
              py: { xs: 3, sm: 2 },
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
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#F4F5F7',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: '5px',
                }}
              >
                <img
                  src={amenity.image}
                  alt={amenity.label}
                  style={{ width: 24, height: 24 }}
                />{' '}
              </Box>
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
                    {amenity?.text}
                  </Typography>
                </Box>
                <Box sx={{ width: 'auto' }}>
                  <Counter
                    formik={formik}
                    name={amenity?.name}
                    title={amenity?.text}
                    limit={amenity?.limit}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))} */}
        {selectedAmenities.map((amenity, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 12px',
              borderRadius: '8px',
            }}
          >
            {/* Left Side - Icon & Label */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                }}
              >
                <Image
                  src={amenity.image}
                  alt={amenity.label}
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 500, color: '#333333' }}
              >
                <Typography>{amenity.label || amenity.name}</Typography>
              </Typography>
            </Box>

            {/* Right Side - Counter */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: '5px',
                padding: '4px 8px',
                backgroundColor: '#EFEEEF',
              }}
            >
              <Button
                sx={{
                  minWidth: '21px',
                  height: '22px',
                  padding: 0,
                  backgroundColor: '#F8F6F8',
                  borderRadius: '2px',
                  boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => {
                  const updatedAmenities = [...selectedAmenities];
                  updatedAmenities[index].count =
                    (updatedAmenities[index].count || 1) + 1;
                  setSelectedAmenities(updatedAmenities);
                }}
              >
                <span style={{ color: '#4F4F4F' }}> +</span>
              </Button>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                {amenity.count || 1}
              </Typography>
              <Button
                sx={{
                  minWidth: '21px',
                  height: '22px',
                  padding: 0,
                  backgroundColor: '#F8F6F8',
                  borderRadius: '2px',
                  boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => {
                  const updatedAmenities = [...selectedAmenities];
                  if (updatedAmenities[index].count > 1) {
                    updatedAmenities[index].count -= 1;
                  } else {
                    updatedAmenities.splice(index, 1);
                  }
                  setSelectedAmenities(updatedAmenities);
                }}
              >
                <span style={{ color: '#4F4F4F' }}> - </span>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PropertyFacilities;
