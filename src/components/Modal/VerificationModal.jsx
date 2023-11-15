import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

import { Modal_Text } from '@/app/constants/Modal';

const VerificationModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open Verification modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: '500px',
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: '335px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
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
              {Modal_Text.verificationCode}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400px',
                fontSize: '16px',
                color: '#666',
              }}
            >
              {Modal_Text.code}
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
              {Modal_Text.confirm}
            </Button>
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '16px',
                fontFamily: 'Inter',
              }}
            >
              {Modal_Text.attempts}
            </Typography>
            <hr style={{ width: '100%', background: '#979797' }} />
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '16px',
                fontFamily: 'Inter',
              }}
            >
              {Modal_Text.codeOtp}
              <span
                style={{
                  color: '#126FAA',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                Resend Code
              </span>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VerificationModal;
