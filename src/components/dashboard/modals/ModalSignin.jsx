import React from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import LoginCard from '../../LoginSignup/Login/LoginCard';

const ModalSignin = ({ open, handleClose }) => {
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
            width: '90%',
            height: '95%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
          }}
        >
          <LoginCard handleClose={handleClose} fromModal={true} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalSignin;
