import React, { useState } from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material';
import Image from 'next/image';

import BidSlider from './BidSlider';
import { BIDDINGS } from '@/app/constants/Biddings';
import { Box } from '@mui/system';
import MobleScreenSlider from './MobleScreenSlider';
import VideoSlider from './VideoSlider';
import DesktopScreenSlider from './DesktopScreenSlider';

const BidMedia = ({ title, media, mediaType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mediaType === 'images' ? (
          <>
            <Box
              className="fullScreen"
              sx={{
                backgroundColor: '#fff',
                width: '1050px',
                height: '569px',
                borderRadius: '30px',
                margin: 'auto',
                padding: '0px 80px',
              }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <DesktopScreenSlider
                  imageSlider={media}
                  handleClose={handleClose}
                />
              </Box>
            </Box>
            <Box
              className="MobileScreen"
              sx={{
                position: 'relative',
                width: { xs: '100%' },
                height: 'auto !important',
                mx: '0px auto',
              }}
            >
              <MobleScreenSlider
                imageSlider={media}
                modalWidth={700}
                handleClose={handleClose}
              />
            </Box>
          </>
        ) : (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '53%' },
              mx: '0px auto',
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: -15,
                top: -70,
                cursor: 'pointer',
              }}
            >
              <Image
                src={'/images/biddings/images/close.png'}
                width={30}
                height={30}
                alt="close"
              />
            </Button>
            <Box
              sx={{
                borderRadius: '30px',
              }}
            >
              <VideoSlider
                videosSlider={media}
                modalWidth={1050}
                modalHeight={569}
              />
            </Box>
          </Box>
        )}
      </Modal>

      <Grid container>
        <Grid
          item
          xs={6}
          sx={{ py: '40px', display: 'flex', justifyContent: 'flex-start' }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#000',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ py: '40px', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            sx={{
              mx: '4px',
              fontWeight: 600,
              width: '150px',
              height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
              color: '#FB631C',
              '&:hover': {
                color: '#fff',
              },
              borderRadius: '50px',
            }}
            variant="outlined"
            onClick={handleOpen}
          >
            {BIDDINGS.ViewAllbutton.title}
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', gap: 'auto' }}>
        <BidSlider media={media} mediaType={mediaType} />
      </Grid>
    </>
  );
};

export default BidMedia;
