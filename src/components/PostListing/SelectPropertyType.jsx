'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import PropertyTypes from './PropertyPlot';
import { PROPERTY_PURPOSE } from '@/app/constants/Properties';
import { useDispatch } from 'react-redux';

import {
  addPropertyType,
  addpropetySubType,
} from '@/src/redux/slices/buyingForm/buyingSellingSlice';

const SelectProperyType = ({
  image,
  label,
  iconTitle,
  plotType,
  commercialType,
}) => {
  const [activePropertyType, setActivePropertyType] = useState('House');
  const [activePropertySubType, setActivePropertySubType] = useState(null);
  const [propertyType, setPropertyType] = useState(activePropertyType);
  const [propetySubType, setPropetySubType] = useState();

  const dispatch = useDispatch();

  const handlePropertyType = (text) => {
    setActivePropertyType(text);
    setPropertyType(text);
  };

  const handlePropetySubType = (text) => {
    setActivePropertySubType(text);
    setPropetySubType(text);
  };

  useEffect(() => {
    dispatch(addPropertyType(propertyType));
  }, [propertyType]);

  useEffect(() => {
    dispatch(addpropetySubType(propetySubType));
  }, [propetySubType]);

  return (
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
          alignSelf: 'flex-start',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: 400,
          gap: '8px',
        }}
      >
        <Image src={image} width={47} height={45} alt="properttype" />
        <Typography
          sx={{
            color: '#333333',
          }}
        >
          {label}{' '}
        </Typography>
        <span style={{ color: '#FF0000' }}>*</span>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{ color: activePropertyType === 'House' ? '#FB631C' : '#666' }}
          onClick={() =>
            handlePropertyType(PROPERTY_PURPOSE?.propertyType?.house)
          }
        >
          {PROPERTY_PURPOSE?.propertyType?.house}
        </Button>
        <Button
          sx={{ color: activePropertyType === 'Plots' ? '#FB631C' : '#666' }}
          onClick={() =>
            handlePropertyType(PROPERTY_PURPOSE?.propertyType?.plots)
          }
        >
          {PROPERTY_PURPOSE?.propertyType?.plots}
        </Button>
        <Button
          sx={{
            color: activePropertyType === 'Commercial' ? '#FB631C' : '#666',
          }}
          onClick={() =>
            handlePropertyType(PROPERTY_PURPOSE?.propertyType?.commercial)
          }
        >
          {PROPERTY_PURPOSE?.propertyType?.commercial}
        </Button>
      </Box>
      <hr style={{ width: '100%' }}></hr>
      {activePropertyType === 'House' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: '8px',
            gap: '10px',
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr',
            },
          }}
        >
          {iconTitle.map((item, index) => (
            <Button
              sx={{
                borderRadius: '20px',
                border: `1px solid ${
                  activePropertySubType === item?.title ? '#126FAA' : '#E7E7E7'
                }`,
                color:
                  activePropertySubType === item?.title ? '#FB631C' : '#666',
                backgroundColor:
                  activePropertySubType === item?.title
                    ? '#F4F5F7 !important'
                    : '#fff',
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                padding: '5px',
              }}
              key={index}
              onClick={() => {
                handlePropetySubType(item?.title);
              }}
            >
              <Image
                src={
                  activePropertySubType === item?.title
                    ? item?.activeImage
                    : item?.image
                }
                width={33}
                height={31}
                alt="property"
              />
              {item.title}
            </Button>
          ))}
        </Box>
      )}
      {activePropertyType === 'Plots' && (
        <PropertyTypes
          data={plotType}
          handlePropetySubType={handlePropetySubType}
          activePropertySubType={activePropertySubType}
        />
      )}
      {activePropertyType === 'Commercial' && (
        <PropertyTypes
          data={commercialType}
          activePropertySubType={activePropertySubType}
          propetySubType={propetySubType}
          handlePropetySubType={handlePropetySubType}
        />
      )}
    </Box>
  );
};
export default SelectProperyType;
