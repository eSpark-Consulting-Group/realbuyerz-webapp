'use client'
import React, { useState } from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from './postlistingConstants';
import PostTitle from './PostTitle';
import PropertyAddInformation from './PropertyAddInformation';
import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';

const AdInformation = ({inputChange}) => {
  const [propertyData, setPropertyData] = useState(PROPERTY_BUYING_DETAIL)
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  // const handleClick = () => {
  //   console.log("propertyData",propertyData)
  // }
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/assets/images/realbuyer.svg")',
          backgroundSize: '60% 60%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '90%',
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION.postTitles.adInfo} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PropertyAddInformation
              inputChange={handleInputChange}
              PropertyInformation={PROPERTY_INFORMATION.addInfo}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
