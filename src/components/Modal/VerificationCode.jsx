'use client';
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import { verificationState } from '@/utils/verification';
import { VERIFICATION_OTP } from '@/app/constants/Modal';
import CongratsModal from './CongratulationModal';
import { handleVerificationChange } from '@/utils/codeValidation';
import { isInputValid } from '@/utils/inputValid';
import { isLengthValid } from '@/utils/lengthValid';

const VerificationCode = ({ receivedCode, otpReceivedCode }) => {
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(false);
  const [open, setOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState(
    verificationState(receivedCode, otpReceivedCode)
  );
  const [verificationResult, setVerificationResult] = useState();
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const handleChange = (index, value) => {
    handleVerificationChange(
      index,
      value,
      receivedCode,
      inputValues,
      setVerificationCode,
      setInputValues
    );
  };
  const code = verificationCode.verified;
  console.log('code', code);
  console.log('vercode', verificationCode);
  const isValid = isInputValid(code);

  const checkLength = isLengthValid(code);

  const handleConfirm = () => {
    if (isValid && checkLength) {
      setVerificationResult(VERIFICATION_OTP.verificationSuccessfully);
      setIsVerificationSuccessful(true);
      if (setIsVerificationSuccessful) {
        handleModalToggle();
      }
    } else {
      setVerificationResult(VERIFICATION_OTP.verificationFail);
    }
  };
  const handleModalToggle = () => {
    setOpen(!open);
  };
  console.log('pp', verificationCode);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {Object.values(receivedCode).map((_, index) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '5px',
              border: '1px solid #126FAA',
              background: '#FFF',
              boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.25)',
              height: '70px',
              width: '60px',
            }}
            key={index}
          >
            <Typography
              sx={{
                color: '#126FAA',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '20px',
              }}
            >
              <TextField
                value={inputValues[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                type="number"
                InputProps={{
                  style: {
                    borderRadius: 0,
                    outline: 'none',
                  },
                  '& input[type=number]::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                  },
                }}
              />
            </Typography>
          </Box>
        ))}
      </Box>
      <Button
        style={{
          background: '#126FAA',
          color: 'white',
          fontWeight: '500px',
          fontSize: '20px',
          width: '150px',
          borderRadius: '10px',
        }}
        onClick={handleConfirm}
      >
        {VERIFICATION_OTP.confirm}
      </Button>
      {isVerificationSuccessful && (
        <CongratsModal
          onClose={() => setIsVerificationSuccessful(false)}
          open={open}
          onCloseModal={handleModalToggle}
        />
      )}
      {verificationResult && <Box>{verificationResult}</Box>}
    </>
  );
};

export default VerificationCode;
