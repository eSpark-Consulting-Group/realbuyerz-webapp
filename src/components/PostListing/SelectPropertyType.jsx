'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { createPropertyTypeState } from '@/utils/propertyType';
import PropertyTypes from './PropertyPlot';
import { PROPERTY_PURPOSE } from '@/app/constants/Properties';
import { handleButtonClick } from '@/utils/properyTypeData';
import { useDispatch } from 'react-redux';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';

const SelectProperyType = ({
  image,
  label,
  iconTitle,
  plotType,
  commercialType,
  propertyBuyingDetails,
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const handleActiveButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  const [propertyData, setPropertyData] = useState(
    createPropertyTypeState(
      iconTitle,
      plotType,
      commercialType,
      propertyBuyingDetails
    )
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: savePropertyData,
      payload: propertyData.propertyTypeInfo.sellingData,
    });
    console.log(propertyData);
  };
  const [activePropertyType, setActivePropertyType] = useState(null);
  const handleButtonClickWrapper = (index) => {
    setPropertyData((prevData) =>
      handleButtonClick(index, iconTitle, plotType, commercialType, prevData)
    );
  };
  console.log('propertyData', propertyData);
  useEffect(() => {
    setActivePropertyType('House');
  }, []);
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
          onClick={() => setActivePropertyType('House')}
        >
          {PROPERTY_PURPOSE.propertyType.house}
        </Button>
        <Button
          sx={{ color: activePropertyType === 'Plots' ? '#FB631C' : '#666' }}
          onClick={() => setActivePropertyType('Plots')}
        >
          {PROPERTY_PURPOSE.propertyType.plots}
        </Button>
        <Button
          sx={{
            color: activePropertyType === 'Commercial' ? '#FB631C' : '#666',
          }}
          onClick={() => setActivePropertyType('Commercial')}
        >
          {PROPERTY_PURPOSE.propertyType.commercial}
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
                border: '1px solid #E7E7E7',
                color: '#666',
                background: '#fff',
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                padding: '5px',
              }}
              key={index}
              disabled={index === activeButtonIndex}
              onClick={() => {
                handleActiveButtonClick(index);
                handleButtonClickWrapper(index);
              }}
            >
              <Image src={item.image} width={33} height={31} alt="property" />
              {item.title}
            </Button>
          ))}
        </Box>
      )}
      {activePropertyType === 'Plots' && (
        <PropertyTypes
          data={plotType}
          handleButtonClick={handleButtonClickWrapper}
        />
      )}
      {activePropertyType === 'Commercial' && (
        <PropertyTypes
          data={commercialType}
          handleButtonClick={handleButtonClickWrapper}
        />
      )}
      <Button onClick={handleClick}>Ok</Button>
    </Box>
  );
};
export default SelectProperyType;
