import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { VERIFICATION_CODE, VERIFICATION_OTP } from '@/app/constants/Modal';
import VerificationCode from './VerificationCode';

const VerificationModal = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal open={open} onClose={onCloseModal}>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '500px' },
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: { xs: '400px', md: '370px' },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '210px',
            flexDirection: 'column-reverse',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              height: { xs: '400px', md: '550px' },
            }}
          >
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '25px',
              }}
            >
              {VERIFICATION_OTP.verificationCode}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400px',
                fontSize: '16px',
                color: '#666',
              }}
            >
              {VERIFICATION_OTP.code}
            </Typography>
            <VerificationCode
              receivedCode={VERIFICATION_OTP.otpCode}
              otpReceivedCode={VERIFICATION_CODE.codeOTP}
            />
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '16px',
              }}
            >
              {VERIFICATION_OTP.attempts}
            </Typography>
            <hr style={{ width: '100%', background: '#979797' }} />
            <Typography
              sx={{
                fontWeight: '500px',
                fontSize: '16px',
              }}
            >
              {VERIFICATION_OTP.codeOtp}
              {'  '}
              <span
                style={{
                  color: '#126FAA',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {VERIFICATION_OTP.resendCode}
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: '25px',
              marginTop: '13px',
            }}
          >
            <Image
              src={'/images/modal/close.svg'}
              width={28}
              height={28}
              alt="close"
              onClick={onCloseModal}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VerificationModal;
