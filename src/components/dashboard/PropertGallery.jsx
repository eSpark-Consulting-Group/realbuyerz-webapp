import Image from 'next/image';

import { toast } from 'react-toastify';

import { Typography, Box, Grid } from '@mui/material';

import InstructionsForUpload from './ads-form-components/InstructionsForUpload';
import ImageUploader from './ads-form-components/ImageUploader';
import VideoUploader from './ads-form-components/VideoUploader';
import PostTitle from './ads-form-components/PostTitle';

import { boxStyles } from './ads-form-components/styles';

const maxVideos = 5;
const maxImages = 5;
const backgroundImage =
  "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27%3e%3crect width=%27100%25%27 height=%27100%25%27 fill=%27none%27 stroke=%27%23FB631C%27 stroke-width=%272%27 stroke-dasharray=%276%2c14%27 stroke-linecap=%27square%27/%3e%3c/svg%3e')";

const PropertyGallery = ({ formik, propertyData }) => {
  const { errors, values, setFieldValue } = formik;

  const handleImageUpload = (type, files) => {
    const existingImages = values?.images || [];

    if (
      files?.length + existingImages?.length <= maxImages &&
      type?.includes('image')
    ) {
      const newFiles = Array.from(files).filter(
        (file) => !existingImages.some((img) => img.name === file.name)
      );

      if (newFiles.length > 0) {
        const updatedImages = [...existingImages, ...newFiles];
        setFieldValue('images', updatedImages);
      }
    } else {
      toast.error('Maximum limit of images reached');
    }
  };

  const handleVideoUpload = (type, file) => {
    const currentVideos = values?.videos || [];

    if (currentVideos?.length < maxVideos && type?.includes('video')) {
      const updatedVideos = [...currentVideos, file];
      setFieldValue('videos', updatedVideos);
    } else {
      toast.error('Maximum limit of videos reached');
    }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
      }}
    >
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
            width: '100%',
            '@media (min-width: 960px) and (max-width: 1399px)': {
              height: '780px',
            },
          }}
        >
          <PostTitle text={propertyData?.postTitles?.imagesvidoes} />

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
                  ...boxStyles('100%'),
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
                    <Image
                      src={propertyData?.upload?.images}
                      alt={'areasize'}
                      width={47}
                      height={45}
                      className="label-display-box"
                    />

                    <RequiredText
                      text={propertyData?.upload?.text}
                      display={{ xs: 'flex', sm: 'none' }}
                    />
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
                      flexDirection: 'column',
                      gap: 2,
                      mt: 0.8,
                      mb: 3,
                    }}
                  >
                    <RequiredText
                      text={propertyData?.upload?.text}
                      display={{ xs: 'none', sm: 'flex' }}
                      mb={0.5}
                    />

                    <Box
                      sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        backgroundImage,
                        display: 'flex',
                        alignItems: { xs: 'start', md: 'center' },
                        py: 3,
                        px: { xs: 3, sm: 5 },
                        '@media (min-width: 280px) and (max-width:424px)': {
                          px: 2,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          px: { xs: 1, md: 4 },
                          display: 'flex',
                          alignItems: { xs: 'start', md: 'center' },
                          flexDirection: 'column',
                          gap: 3,
                          pb: { xs: 2, md: 0 },
                        }}
                      >
                        <ImageUploader
                          onUpload={handleImageUpload}
                          maxImages={maxImages}
                        />

                        {errors?.images && (
                          <Typography color="red">{errors?.images}</Typography>
                        )}

                        <VideoUploader
                          onUpload={handleVideoUpload}
                          maxVideos={maxVideos}
                        />

                        {errors?.videos && (
                          <Typography color="red">{errors?.videos}</Typography>
                        )}
                      </Box>

                      <InstructionsForUpload
                        propertyInformation={propertyData?.uploadInstruction}
                      />
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

const RequiredText = ({ text, display, mb = 0 }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: '17px', sm: '20px' },
        textWrap: 'wrap',
        fontWeight: 400,
        color: '#333333',
        display: display,
        mb: mb,
      }}
    >
      {text}
      <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
    </Typography>
  );
};

export default PropertyGallery;
