import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const BasicModal = ({ open, close, body, maxWidth, maxHeight }) => {
  const style = {
    width: '95%',
    height: '95%',
    maxWidth: maxWidth || { xs: '275px', sm: '320px', md: '350px' },
    maxHeight: maxHeight || { xs: '200px' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{body}</Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
