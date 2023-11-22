import React from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material';
import BidSlider from './BidSlider';
import { BIDDINGS } from '@/app/constants/Biddings';
import { Box } from '@mui/system';
import Gallery from '../Gallary';

const BidMedia = ({ title, media, mediaType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            width: '50%',
            height: 'auto',
            mx: 'auto',
            my: 'auto',
            borderRadius: '30px',
            padding: '60px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Button>close</Button>
          </Box>
          <Gallery images={media} />
        </Box>
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
