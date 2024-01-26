import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import UploadMediaButton from './UploadMediaButton';
import InstructionsForUpload from './InstructionsForUpload';

const PropertyGallery = ({ handleFileChange, propertyData }) => {
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
            // height: { xs: '1100px', md: '581px' },
            backgroundColor: 'white',
            '@media (min-width: 960px) and (max-width: 1399px)': {
              height: '780px',
            },
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION?.postTitles?.imagesvidoes} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: 5,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'start' },
                  justifyContent: { xs: 'center', md: 'center' },
                  gap: 2,
                  pb: { xs: 2, sm: 2 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '90%', sm: '45px' },
                    pl: '0 !important',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      component={'img'}
                      src={PROPERTY_INFORMATION?.upload?.images}
                      sx={{
                        width: { xs: 37, sm: 47 },
                        height: { xs: 35, sm: 45 },
                      }}
                      alt="areasize"
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', sm: '20px' },
                        textWrap: 'wrap',
                        fontWeight: 400,
                        color: '#333333',
                        display: { xs: 'flex', sm: 'none' },
                      }}
                    >
                      <span>
                        {PROPERTY_INFORMATION?.upload?.text}
                        <span style={{ marginLeft: '5px', color: '#FF0000' }}>
                          *
                        </span>
                      </span>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      // backgroundColor: 'red',
                      flexDirection: 'column',
                      gap: 2,
                      mt: 0.8,
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '17px', sm: '20px' },
                        fontWeight: 400,
                        color: '#333333',
                        mb: 0.5,
                        display: { xs: 'none', sm: 'flex' },
                      }}
                    >
                      {PROPERTY_INFORMATION?.upload?.text}
                      <span style={{ marginLeft: '5px', color: '#FF0000' }}>
                        *
                      </span>
                    </Typography>
                    <Box
                      sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        border: '1px #FB631C dashed',
                        display: 'flex',
                        alignItems: 'start',
                        py: 3,
                        px: { xs: 3, sm: 5 },
                        '@media (min-width: 280px) and (max-width:424px)': {
                          px: 2,
                        },
                      }}
                    >
                      <UploadMediaButton
                        propertyInformation={PROPERTY_INFORMATION.uploadButton}
                        propertyBuyingDetails={
                          PROPERTY_BUYING_DETAIL?.sellingDetails
                        }
                        handleFileChange={handleFileChange}
                        propertyData={propertyData}
                      />
                      <Box>
                        <InstructionsForUpload
                          propertyInformation={
                            PROPERTY_INFORMATION?.uploadInstruction
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
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
