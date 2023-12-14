import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addLocationAndPuspose } from '@/src/redux/slices/buyingForm/buyingSlice';

const PropertyStatus = ({ propertyInformation, propertyData }) => {
  const [activePropertyStatus, setActivePropertyStatus] =
    React.useState('Sell');
  const [properStatusData, setProperStatusData] =
    React.useState(activePropertyStatus);
  const dispatch = useDispatch();

  const handleChange = (val) => {
    setActivePropertyStatus(val);
    setProperStatusData(val);
  };

  React.useEffect(() => {
    dispatch(addLocationAndPuspose(properStatusData));
  }, [properStatusData]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
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
            src={propertyInformation.images}
            width={47}
            height={45}
            alt="purpose"
          />
          <Typography
            sx={{
              color: '#333333',
            }}
          >
            {propertyInformation.text}
          </Typography>
          <span style={{ color: '#FF0000' }}>*</span>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '10px',
            marginLeft: { xs: '50px', md: '50px' },
          }}
        >
          {propertyData?.propertyStatusData?.purposeData.map((item, index) => (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                width: { xs: '120px', md: '150px' },
                height: { xs: '50px', md: '60px' },
                alignItems: 'center',
                border: `1px solid ${
                  activePropertyStatus === item?.text ? '#126FAA' : '#E7E7E7'
                }`,
                color: activePropertyStatus === item?.text ? '#FB631C' : '#666',
                backgroundColor:
                  activePropertyStatus === item?.text
                    ? '#F4F5F7 !important'
                    : '#fff',
              }}
              key={index}
              onClick={() => handleChange(item?.text)}
            >
              <Image
                src={
                  activePropertyStatus == item?.text
                    ? item?.activeImage
                    : item?.image
                }
                width={33}
                height={31}
                alt="sell-rent"
              />
              <input
                value={item?.text}
                onClick={() => handleChange(item?.text)}
                type="button"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default PropertyStatus;
