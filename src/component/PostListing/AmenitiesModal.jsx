import React from 'react';
import { Modal, Box } from '@mui/material';

import Facilities from './Facilities';

const AmenitiesModal = (props) => {
  const { onClose, open, data, onSelected } = props;
  const handleClose = () => {
    onClose();
  };
  const handleCancelButton = () => {
    onClose();
  };
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
            background: 'white',
            width: { xs: '100%', md: '40%' },
            margin: "auto",
            marginTop: "200px",
             '@media (min-width: 960px) and (max-width: 1500px)': {
                  width: '60%',
                },
          }}
        >
          <Facilities
            cancel={handleCancelButton}
            Data={data}
            onSelected={onSelected}
          />
        </Box>
      </Modal>
    </>
  );
};

export default AmenitiesModal;
