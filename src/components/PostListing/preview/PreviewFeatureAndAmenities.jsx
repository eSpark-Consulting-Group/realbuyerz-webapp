import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Counter from '../inputNumber/counter';

const PreviewFeatureAndAmenities = ({
  bedrooms,
  bathrooms,
  parking,
  other_features,
  amenities,
  fontSize,
  fontStyle,
  fontWeight,
  getSelectedAmenities,
  formik
}) => {
  console.log(other_features, 'other_features')
  console.log(amenities, 'amenities')
  console.log(getSelectedAmenities, 'getSelectedAmenities')
  console.log(formik, 'formik')
  return (
    <>
      {/* {amenities?.title && ( */}
        <Box
          sx={{
            p: 5,
            borderBottom: '1px solid #E4E4E4',
            '@media(min-width:280px) and (max-width:400px)': { px: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: fontSize ? fontSize : '20px' },
              fontWeight: 500,
              mb: 1,
            }}
          >
            {amenities?.title}
          </Typography>
          {bedrooms > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.bedrooms}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {bedrooms && bedrooms}
              </Typography>
            </Box>
          )}
          {bathrooms > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.bathrooms}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {bathrooms && bathrooms}
              </Typography>
            </Box>
          )}
          {parking > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.parking}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {parking && parking}
              </Typography>
            </Box>
          )}
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
            {getSelectedAmenities?.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: {xs:'center', sm: 'left', md: 'space-between' },
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
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#F4F5F7',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: '5px',
                    }}
                  >
                    <Image
                      src={item?.image}
                      width={20}
                      height={20}
                      alt="facility"
                    />
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
                    <Box sx={{ width: {xs:'auto',sm:'130px'} }}>
                      <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                        {item?.text}
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
            ))}

          </Box>
        </Box>
      {/* )
      } */}
    </>
  );
};

export default PreviewFeatureAndAmenities;
