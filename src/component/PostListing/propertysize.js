'use client';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Switch,
  Grid,
} from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
const PropertySize = () => {
  const [value, setValue] = useState('');
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            width: '90%',
            height: { xs: '1000px', md: '730px' },
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.sizeprice} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: { xs: '10px', md: '0' },
              width: { xs: '80%', sm: '90%', md: '800px' },
              padding: '50px',
              backgroundImage: 'url("/assets/images/realbuyer.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
            }}
          >
            {/* <Box sx={{display:"flex",flexDirection:"column", padding:"40px"}}> */}
            {PropertyInformation.propertySize.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '15px',
                  width: { xs: '100%', md: '80%', lg: 'auto' },
                }}
                key={index}
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
                  <Image src={item.image} width={45} height={45} />
                  <Typography
                    sx={{
                      color: '#333333',
                    }}
                  >
                    {item.text}{' '}
                  </Typography>
                  <span style={{ color: '#FF0000' }}>*</span>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    gap: '10px',
                  }}
                >
                  <TextField
                    placeholder={item.placeholder}
                    sx={{
                      //   width: "500px",
                      width: { xs: '100%', md: '500px' }, // Set width to 100% on small screens and 500px on medium screens
                    }}
                  />
                  <TextField
                    sx={{
                      //   width: "200px",
                      width: { xs: '100%', md: '200px' }, // Set width to 100% on small screens and 500px on medium screens
                      color: '#777777',
                    }}
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    select
                    label="Select City"
                  >
                    <MenuItem key={1} value="test0">
                      {item.option1}
                    </MenuItem>
                    <MenuItem key={2} value="test1">
                      {item.option2}
                    </MenuItem>
                  </TextField>
                </Box>
              </Box>
            ))}
            {PropertyInformation.installment.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: { xs: '100%', md: '80%', lg: 'auto' },
                  gap: '15px',
                }}
                key={index}
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
                  <Image src={item.image} width={45} height={45} />
                  <Typography
                    sx={{
                      color: '#333333',
                    }}
                  >
                    {item.title}{' '}
                  </Typography>
                  <span style={{ color: '#FF0000' }}>*</span>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '10px',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#333333',
                      width: { xs: '100%', md: '650px' },
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Switch {...label} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertySize;
