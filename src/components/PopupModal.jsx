import { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Button, Grid, Modal, Typography } from '@mui/material';

import { OK } from '@/app/constants/PopupModal';

const PopupModal = ({ Message }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
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
        <Box
          sx={{
            width: { lg: '50%', md: '50%', sm: '80%' },
            height: { lg: '558px' },
            borderRadius: '52px',
            boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            background: `url('/images/Popup-submitted-ad.png') no-repeat`,
            backgroundSize: { lg: 'cover', md: 'cover', sm: 'cover' },
            margin: 'auto',
            my: 'auto',
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
            }}
          >
            <Grid
              lg={4}
              xs={12}
              sx={{
                flexShrink: '0px',
                pl: 5,
                pr: { xs: 5, lg: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: {
                    xs: '0px',
                    sm: '50px',
                    md: '50px',
                    lg: '165px',
                  },
                }}
              >
                <Image
                  src={'/images/success.gif'}
                  width={133}
                  height={100}
                  alt="success-icon"
                />
              </Box>
              <Typography
                sx={{
                  color: '#333',
                  textAlign: 'center',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  marginTop: { xs: '0px', sm: '40px' },
                }}
              >
                {Message}
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  textAlign: { xs: 'center' },
                }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    width: ' 100.655px',
                    height: ' 38.7px',
                    flexShrink: 0,
                    backgroundColor: '#1176AD !important',
                    color: '#fff',
                    borderRadius: ' 10px',
                    border: '2px solid #1176AD',
                    marginTop: { xs: '5px', sm: '15px', lg: '42px' },
                    marginBottom: '-10px',
                  }}
                >
                  {OK}
                </Button>
              </Box>
            </Grid>
            <Grid
              container
              lg={8}
              xs={12}
              items
              sx={{
                flexShrink: '0px',
                backgroundSize: 'cover',
                marginTop: { lg: '105px' },
                my: { xs: '14px', sm: '14px', md: '14px' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box>
                <Image
                  src={'/images/successalert.gif'}
                  width={500}
                  height={100}
                  alt="success-icon"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default PopupModal;
