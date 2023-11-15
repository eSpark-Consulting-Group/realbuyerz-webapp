import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from '../../../app/constants/postlistingConstants';
import PostTitle from './PostTitle';
import UploadMediaButton from './UploadMediaButton';
import UploadInstructions from './InstructionsForUpload';

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
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
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
            width: '90%',
            height: { xs: '1100px', md: '581px' },
            '@media (min-width: 960px) and (max-width: 1399px)': {
              height: '780px',
            },
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION.postTitles.imagesvidoes} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '50px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '20px', md: '25px' },
                fontWeight: 400,
                gap: '10px',
              }}
            >
              <Image
                src={PROPERTY_INFORMATION.upload.images}
                width={47}
                height={45}
                alt="image/video"
              />
              <Typography>{PROPERTY_INFORMATION.upload.text}</Typography>
            </Box>
            <Box
              sx={{
                width: { xs: '100%', md: '80%' },
                height: { xs: '770px', md: '350px' },
                '@media (min-width: 960px) and (max-width: 1399px)': {
                  height: '550px',
                },
                border: '1px #FB631C dashed',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                '@media (min-width: 960px) and (max-width: 1200px)': {
                  flexDirection: 'column',
                },
              }}
            >
              <UploadMediaButton
                PropertyInformation={PROPERTY_INFORMATION.uploadButton}
              />
              <Box>
                {' '}
                <UploadInstructions
                  PropertyInformation={PROPERTY_INFORMATION.uploadInstruction}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyGallery;
