'use client';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import PropertyTypeInfo from './PropertyType';
import SelectProperyType from './SelectPropertyType';
import SelectCityType from './SelectCity';
import SelectLocationType from './SelectLocationType';
const Purpose = () => {
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
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            background: 'white',
            alignItems: 'center',
            height: { xs: '1000px', md: '881px' },
            width: '90%',
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.locationandpurpose} />

          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: { xs: '10px', md: '0' },
              width: { xs: '80%', md: '400px' },
              padding: '50px',
              backgroundImage: 'url("/assets/images/realbuyer.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
            }}
          > */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'green',
              width: { xs: '80%', md: '800px' },
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
              <Image
                src={PropertyInformation.purpose.images}
                width={47}
                height={45}
              />
              <Typography
                sx={{
                  color: '#333333',
                }}
              >
                {PropertyInformation.purpose.text}{' '}
              </Typography>
              <span style={{ color: '#FF0000' }}>*</span>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {PropertyInformation.sell.map((item, index) => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    border: '1px #E7E7E7 solid',
                    width: { xs: '120px', md: '150px' },
                    height: { xs: '50px', md: '60px' },
                    alignItems: 'center',
                  }}
                  key={index}
                >
                  <Image src={item.images} width={33} height={31} />
                  <Button>{item.text}</Button>
                </Box>
              ))}
            </Box>

            <SelectProperyType />
            <SelectCityType />
            <SelectLocationType />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Purpose;
// {
//     PropertyInformation.property.map((item, index) => (
//         <Box sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             gap: "15px"
//         }} key={index}>
//             <Image
//                 src={item.image}
//                 width={40}
//                 height={40}
//             />
//             <Typography
//                 sx={{
//                     fontSize: "22px",
//                     fontFamily: "Inter",
//                     fontWeight: 400,
//                     color: "#909394"
//                 }}
//             >
//                 {item.title}
//             </Typography>
//         </Box>
