import React from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import LoginCard from '../loginsignup/Login/LoginCard';

const ModalSignin = ({ handleClose, open }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
          }}
        >
          <LoginCard handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalSignin;
