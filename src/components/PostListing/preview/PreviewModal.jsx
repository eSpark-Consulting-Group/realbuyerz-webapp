import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

import { BIDDINGS } from '@/app/constants/Biddings';
import Location from './Location';
import PreviewAmountAndFeature from './PreviewAmountAndFeature';
import PropertyDetail from './PropertyDetail';
import MediaComponent from './MediaComponent';

const PreviewModal = (props) => {
  const { amenities, amount, location } = BIDDINGS;
  const { onClose, open, ads } = props;

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
            top: '50%',
            left: '50%',
            width: { xs: '92%', sm: '800px', xxl: '1200px' },
            bgcolor: 'background.paper',
            height: { xs: 'auto', sm: '800px', xxl: '1400px' },
            '@media (min-width: 280px) and (max-width:833px)': {
              width: '92%',
              height: '800px',
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
              height: { xs: '700px', xl: '100%' },
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                width: '0px',
                background: 'transparent',
              },
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
              Preview
            </Typography>
            {ads?.adInfomation?.title && (
              <PropertyDetail
                title={'Property Details'}
                values={ads?.adInfomation}
              />
            )}
            {ads?.locationAndPurpose && (
              <Location location={location} values={ads?.locationAndPurpose} />
            )}
            {ads?.featuresAndAmenities && (
              <PreviewAmountAndFeature
                amountData={amount}
                amenities={amenities}
                PricingValues={ads?.propertySizeAndPricing}
                FeatureValues={ads?.featuresAndAmenities}
              />
            )}
            {ads?.propertyImagesAndVideos?.images.length > 0 && (
              <MediaComponent
                title={'Project Images'}
                values={ads?.propertyImagesAndVideos}
                mediaType={'images'}
              />
            )}
            {ads?.propertyImagesAndVideos?.videos.length > 0 && (
              <MediaComponent
                title={'Project Videos'}
                values={ads?.propertyImagesAndVideos}
                mediaType={'videos'}
              />
            )}
          </Box>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
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
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PreviewModal;
