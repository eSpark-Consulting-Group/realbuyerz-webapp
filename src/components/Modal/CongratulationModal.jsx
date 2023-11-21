import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

import { VERIFICATION_OTP } from '@/app/constants/Modal';

const CongratsModal = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleModalToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button onClick={handleModalToggle}>{VERIFICATION_OTP.openModal}</Button>
      <Modal open={open} onClose={handleModalToggle}>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '500px' },
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: '335px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '210px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '10px',
              height: '200px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '25px',
                fontFamily: 'Inter',
              }}
            >
              {VERIFICATION_OTP.congrats}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400px',
                fontSize: '16px',
              }}
            >
              {VERIFICATION_OTP.verifiedNum}
            </Typography>
            <Button
              style={{
                background: '#126FAA',
                color: 'white',
                fontWeight: '500px',
                fontSize: '20px',
                width: '150px',
                borderRadius: '10px',
              }}
            >
              {VERIFICATION_OTP.continue}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CongratsModal;
