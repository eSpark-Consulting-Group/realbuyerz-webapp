import React from 'react';
import { Typography, Box, TextField, Button, Grid } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import Counter from './inputNumber/counter';

const PropertyFeature = () => {
  const addiotionalFeature =
    'Add additional features e.g. Rooftop terrace, 24/7 security, Walking trails, Washing area etc';
  const addAmenties = 'Add Amenities';
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
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: { xs: '750px', md: '487px' },
            alignItems: 'center',
            width: '90%',
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.featureamenities} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: '10px', md: '15px' },
              width: { xs: '100%', md: '700px' },
              padding: { xs: '10px', md: '40px' },
              flexDirection: 'column',
              background: 'gray',
            }}
          >
            {PropertyInformation.feature.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  fontSize: { xs: '18px', md: '20px' },
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  gap: '8px',
                }}
                key={index}
              >
                <Image src={item.image} width={47} height={45} />
                <Typography>{item.title}</Typography>
                <Counter />
              </Box>
            ))}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'baseline' },
              }}
            >
              <Typography
                sx={{
                  color: '#666666',
                  fontSize: { xs: '14px', md: '18px' },
                  fontFamily: 'Inter',
                  fontWeight: 400,
                }}
              >
                {addiotionalFeature}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '180px',
                  height: '45px',
                  borderRadius: '5px',
                  border: '1px #FB631C solid',
                  padding: '10px',
                }}
              >
                <Image src={'assets/images/add.svg'} width={20} height={20} />
                <Button
                  sx={{
                    color: '#FB631C',
                  }}
                >
                  {addAmenties}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyFeature;
