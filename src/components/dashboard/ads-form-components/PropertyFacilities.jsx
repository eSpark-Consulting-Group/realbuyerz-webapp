import Image from 'next/image';

import { Typography, Box } from '@mui/material';

import Counter from '../inputNumber/counter';

const PropertyFacilities = ({
  propertyInformation,
  formik,
  selectedAmenities,
  setSelectedAmenities,
  getAmenities,
}) => {
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
                justifyContent: { xs: 'center', sm: 'left' },
                alignItems: 'center',
                width: 'auto',
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
              <Counter
                formik={formik}
                item={amenity}
                getAmenities={getAmenities}
                index={index}
                setSelectedAmenities={setSelectedAmenities}
                selectedAmenities={selectedAmenities}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PropertyFacilities;
