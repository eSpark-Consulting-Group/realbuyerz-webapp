import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { usePathname } from 'next/navigation';

import Location from './Location';
import PreviewAmountAndFeature from './PreviewAmountAndFeature';
import PropertyDetail from './PropertyDetail';
import MediaComponent from './MediaComponent';
import PreviewFeatureAndAmenities from './PreviewFeatureAndAmenities';

import { PREVIEW_DATA } from '@/src/constants/Preview_Data';

const PreviewModal = (props) => {
  const {
    title,
    buttonText,
    propertyDetails,
    areaAndAmount,
    location,
    images,
    videos,
  } = PREVIEW_DATA;
  const { onClose, open, ads, formik } = props;
  const pathName = usePathname();
  const userPath = '/user/dashboard/all-postings';
  const postRequestPath = '/user/post-request';
  const imageArr = Array.isArray(ads.images) ? ads.images : [];
  const videoArr = ads.videos ? ads.videos.map((vid) => vid.path) : [];

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            width: { xs: '92%', sm: '800px', xxl: '1200px' },
            bgcolor: 'background.paper',
            height: '92%',
            maxHeight: '840px',
            '@media (min-width: 280px) and (max-width:833px)': {
              width: '92%',
            },
            borderRadius: '20px',
            p: { xs: 2, sm: 3.5, md: 5 },
            '@media (min-width: 280px) and (max-width:424px)': {
              p: 1.5,
              gap: 1.2,
            },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1.9, sm: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: '600px', md: '700px' },
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '10px',
                border: '2px solid transparent',
                backgroundClip: 'content-box',
              },
              scrollbarWidth: 'thin',
              scrollbarColor: '#ccc transparent',
            }}
          >
            <Typography
              sx={{
                fontSize: '25px',
                fontWeight: 700,
                mt: 2,
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>

            <PropertyDetail
              title={propertyDetails}
              subTitle={ads?.title}
              description={ads?.description}
              fontSize={'18px'}
              fontStyle={'12px'}
              fontSizeDescription={'10px'}
            />

            <Location
              city={ads?.city}
              locationKeys={location}
              purpose={ads?.purpose}
              propertyType={ads?.propertyCategory}
              location={ads?.address}
              longitude={ads?.longitude}
              latitude={ads?.latitude}
              fontSize={'18px'}
              fontStyle={'12px'}
              fontWeight={'700'}
            />

            <PreviewAmountAndFeature
              area={ads?.area}
              amount={ads?.amount}
              areaUnit={'Sq-ft'}
              areaAndAmount={areaAndAmount}
              amountCurrency={'PKR'}
              instalmentAvailable={ads?.instalmentAvailable}
              readyPossession={ads?.readyPossession}
              fontSize={'18px'}
              fontStyle={'12px'}
              fontWeight={'700'}
            />

            <PreviewFeatureAndAmenities
              amenitiesArray={ads?.amenitiesArray}
              specificPost={{ ...ads, amenitiesArray: ads?.amenitiesArray }}
              fontSize={'18px'}
              fontStyle={'12px'}
              fontWeight={'700'}
              formik={formik}
            />

            {pathName !== userPath && pathName !== postRequestPath ? (
              <>
                <MediaComponent
                  title={images?.title}
                  images={imageArr}
                  mediaType={images?.type}
                />

                <MediaComponent
                  title={videos?.title}
                  videos={videoArr}
                  mediaType={videos?.type}
                />
              </>
            ) : null}
          </Box>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              variant="primary"
              onClick={onClose}
              sx={{
                width: '100px',
                height: '35px',
                color: '#fff',
                borderRadius: '10px',
                border: '1px solid #FB631C',
                background: '#FB631C',
                fontSize: '15px',
                fontWeight: 400,
                '&: hover': { color: '#fff', backgroundColor: '#FB631C' },
                '@media(min-width: 280px) and (max-width:425px)': {
                  width: '100%',
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PreviewModal;
