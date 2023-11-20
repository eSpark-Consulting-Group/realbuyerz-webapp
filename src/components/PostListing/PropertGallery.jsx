import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import UploadMediaButton from './UploadMediaButton';
import InstructionsForUpload from './InstructionsForUpload';

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
          '@media (min-width: 280px)and (max-width: 959px)': {
            backgroundPosition: 'center top 20%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            width: '100%',
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
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: { xs: '100%', md: '75%' },
                height: { xs: '800px', md: '350px' },
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
                  border: '1px #FB631C dashed',
                  display: 'flex',
                  height: { xs: '650px', md: '600px' },
                  '@media (min-width: 960px) and (max-width: 1326px)': {
                    height: '550px',
                  },
                  flexDirection: { xs: 'column', md: 'row' },
                  '@media (min-width: 960px) and (max-width: 1300px)': {
                    flexDirection: 'column',
                  },
                }}
              >
                <UploadMediaButton
                  propertyInformation={PROPERTY_INFORMATION.uploadButton}
                  propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
                />
                <Box>
                  {' '}
                  <InstructionsForUpload
                    propertyInformation={PROPERTY_INFORMATION.uploadInstruction}
                  />
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
