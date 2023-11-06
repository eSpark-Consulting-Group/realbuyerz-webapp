import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import UploadMediaInstructions from './UploadMediaInstructions';
import UploadGalleryButton from './UploadGalleryButton';

const PropertyGallery = () => {
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
          backgroundSize: '70% 70%',
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
            width: '90%',
            height: { xs: '900px', md: '681px' },
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.imagesvidoes} />
            <Box
              sx={{
                display: 'flex',
              flexDirection: "column",
                justifyContent:"center",
              alignItems: "center",
                padding:"70px"
              }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: "column",
              gap:"20px"

            }}>
              <Box
                sx={{
                display: 'flex',
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  fontSize: { xs: '20px', md: '25px' },
                  fontWeight: 400,
                gap: '10px',
                }}
              >
                <Image
                  src={PropertyInformation.upload.images}
                  width={47}
                  height={45}
                />
                <Typography>{PropertyInformation.upload.text}</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '743px' },
                  height: { xs: 'auto', md: '350px' },
                  border: '1px #FB631C dotted',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <UploadGalleryButton PropertyInformation={PropertyInformation.uploadButton} />
                <Box>
                  {' '}
                  <UploadMediaInstructions PropertyInformation={PropertyInformation.uploadInstruction} />
                </Box>
              </Box>
            </Box>
            </Box>
          </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyGallery;
