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
            mt: '10%',
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
                paddingTop: { lg: '330px', sm: '50px', md: '50px' },
              }}
            >
              <Typography
                sx={{
                  color: '#333',
                  textAlign: 'center',
                  // fontFamily: 'Inter',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  marginTop: { xs: '40px', sm: '0px' },
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
                    marginTop: { xs: '15px', lg: '42px' },
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
                  src={
                    'https://s3-alpha-sig.figma.com/img/b5c2/bcf3/122e6a8e71cb8c0ba0d44eb597993f83?Expires=1701043200&Signature=DmMD3AA40TQ0s0DhXlVGrgAqvRiDrL4rSuOlqz4Rk79YeHlAjD9ChSmsVEpnIUQsf2cqvlsOYKBqakDA0~T7GtSoT3fArJRtFJAfX6VnNEvpTZ1NEG553EW4ftwZy2adyJ~hPi8HaXpGsBZusqe4Uk99WxH-AX8zBb5PkspffWlLloi3724VLDDin3C2BhiEOuwPNxPP6c87DyJR2rBdN-heyr4H7oslTkYwwWvEwsIPpKhf~1yHnsCxt7QadELJi05MPc65HymGFfL1FdKJPX7FYOYUPw3tX~E7kcnZ3DQWbZ1nhBscAcXrq5JdHrZDEKAw7IQctdpLPStvfgkUWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                  }
                  width={500}
                  height={100}
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
