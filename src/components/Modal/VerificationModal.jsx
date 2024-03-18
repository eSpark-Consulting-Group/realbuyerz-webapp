import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { VERIFICATION_CODE, VERIFICATION_OTP } from '@/src/constants/Modal';
import VerificationCode from './VerificationCode';

const VerificationModal = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal open={open} onClose={onCloseModal}>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '613px' },
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: { xs: '600px', md: 'auto' },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '210px',
            padding: '50px',
            paddingTop: '20px',
            flexDirection: 'column-reverse',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: '15px',
              height: { xs: '500px', md: '358px' },
            }}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '25px',
              }}
            >
              {VERIFICATION_OTP.verificationCode}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '20px',
                color: '#666',
              }}
            >
              {VERIFICATION_OTP.code}
            </Typography>
            <VerificationCode
              receivedCode={VERIFICATION_OTP.otpCode}
              otpReceivedCode={VERIFICATION_CODE.codeOTP}
            />
            <Box sx={{ display: 'flex', alignSelf: 'flex-start' }}>
              <Typography
                sx={{
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                {VERIFICATION_OTP.attempts}
                <span
                  style={{
                    color: '#666666',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  {VERIFICATION_OTP.secondRemaining}
                </span>
              </Typography>
            </Box>
            <hr style={{ width: '100%', background: '#979797' }} />
            <Box sx={{ display: 'flex', alignSelf: 'flex-start' }}>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '14px',
                }}
              >
                {VERIFICATION_OTP.codeOtp}

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
          </Box>
          <Box
            sx={{
              marginRight: '-10px',
            }}
          >
            <Image
              src={'/images/modal/close.svg'}
              width={28}
              height={28}
              alt={'close'}
              onClick={onCloseModal}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VerificationModal;
