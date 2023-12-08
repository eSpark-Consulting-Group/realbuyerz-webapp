import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  background: '#E8F6FF',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  borderRadius: '27px',
  p: 3,
};

export default function EditProfileModal({ sx }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton component="label" size="small" sx={sx} onClick={handleOpen}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              bgcolor: 'red',
              position: 'relative',
            }}
          >
            <Image
              src={'/images/modal/close.svg'}
              width={28}
              height={28}
              alt="close"
              onClick={handleClose}
              style={{
                right: 0,
                left: 'auto',
                position: 'absolute',
              }}
            />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Image
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Upload Button Here....
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
