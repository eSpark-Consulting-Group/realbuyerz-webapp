'use client';
import { useState } from 'react';

import { Box } from '@mui/material';

import TextDisplay from './TextDisplay';

import { boxStyles } from './styles';

const PropertyStatus = ({ propertyInformation, propertyData, formik }) => {
  const [activePropertyStatus, setActivePropertyStatus] = useState('Sell');

  const handleChange = (val) => {
    formik?.setFieldValue('purpose', val);
    setActivePropertyStatus(val);
  };

  return (
    <Box
      sx={{
        ...boxStyles('auto'),
        pb: { xs: 2, sm: 2, xl: 0 },
        cursor: 'pointer',
      }}
    >
      <TextDisplay
        text={propertyInformation?.text}
        image={propertyInformation?.images}
        alt={'purpose'}
        isMobile
      />

      <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 0.8,
            mb: 3,
          }}
        >
          <TextDisplay text={propertyInformation?.text} />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            {propertyData?.sell?.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '20px',
                  gap: 1.5,
                  width: { xs: '80%', sm: '45%', md: '152px', lg: '152px' },
                  height: { xs: '50px', md: '55px' },
                  '@media (min-width: 600px) and (max-width: 751px )': {
                    width: '45%',
                  },
                  alignItems: 'center',
                  border: `1px solid ${
                    activePropertyStatus === item?.text ? '#126FAA' : '#E7E7E7'
                  }`,
                  color:
                    activePropertyStatus === item?.text ? '#FB631C' : '#666',
                  backgroundColor:
                    activePropertyStatus === item?.text
                      ? '#F4F5F7 !important'
                      : '#fff',
                }}
                key={index}
                onClick={() => handleChange(item?.text)}
              >
                <Box
                  component={'img'}
                  sx={{
                    width: { xs: 25, sm: 33 },
                    height: { xs: 25, sm: 33 },
                  }}
                  src={
                    activePropertyStatus == item?.text
                      ? item?.activeImage
                      : item?.image
                  }
                  width={31}
                  height={31}
                  alt="sell-rent"
                />

                <Box
                  component={'input'}
                  value={item?.text}
                  onClick={() => handleChange(item?.text)}
                  type="button"
                  sx={{
                    fontSize: { xs: '15px', md: '18px', lg: '20px' },
                    fontWeight: 400,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PropertyStatus;
